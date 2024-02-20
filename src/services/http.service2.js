const BASE_URL =
  process.env.NODE_ENV === "production" ? "/api/" : "//localhost:3030/api/";

export const httpService2 = {
  get(endpoint, data = null) {
    return ajax(endpoint, "GET", data);
  },
  post(endpoint, data = null) {
    return ajax(endpoint, "POST", data);
  },
  put(endpoint, data = null) {
    return ajax(endpoint, "PUT", data);
  },
  delete(endpoint, data = null) {
    return ajax(endpoint, "DELETE", data);
  },
};

async function ajax(endpoint, method = "GET", data) {
  let url = `${BASE_URL}${endpoint}`;
  const options = {
    method,
    headers: {
      "Content-Type": "application/json",
    },
    // For DELETE method, we usually don't send a body
    // If data is provided, it's appended as query parameters
    body: undefined,
  };

  if (method === "GET" && data) {
    url += `?${queryString(data)}`;
  } else if (method !== "GET" && data) {
    options.body = JSON.stringify(data);
  }

  try {
    const response = await fetch(url, options);
    const responseData = await response.json();
    if (!response.ok) {
      throw new Error(responseData.message || "Failed to fetch data");
    }
    return responseData;
  } catch (error) {
    console.error(
      `Had Issues ${method}ing to the backend, endpoint: ${endpoint}, with data: ${JSON.stringify(
        data
      )}`
    );
    console.error(error);
    throw error;
  }
}

function queryString(params) {
  return Object.keys(params)
    .map(
      (key) => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`
    )
    .join("&");
}

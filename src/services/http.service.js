import axios from "axios";

const BASE_URL =
  process.env.NODE_ENV === "production" ? "/api/" : "//localhost:3030/api/";

export const httpService = {
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
  try {
    const res = await axios({
      url: `${BASE_URL}${endpoint}`,
      method,
      data,
      params: method === "GET" ? data : null,
    });

    return res.data;
  } catch (err) {
    console.log(
      `Had Issues ${method}ing to the backend, endpoint: ${endpoint}, with data: ${data}`
    );
    console.dir(err);
    throw err;
  }
}

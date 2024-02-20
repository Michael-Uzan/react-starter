import { httpService } from "./http.service";
// import { httpService2 } from "./http.service2";

export const todoService = {
  query,
  getTodoById,
  remove,
  save,
};

const API_URL = "todo";

function query() {
  return httpService.get(API_URL);
}

function getTodoById(todoId) {
  return httpService.get(`${API_URL}/${todoId}`);
}

function remove(todoId) {
  return httpService.delete(`${API_URL}/${todoId}`);
}

function save(todo) {
  if (todo._id) {
    return _put(todo);
  } else {
    return _post(todo);
  }
}

function _put(todo) {
  return httpService.put(`${API_URL}/${todo._id}`, todo);
}
function _post(todo) {
  return httpService.post(API_URL, todo);
}

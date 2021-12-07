import { call, put, takeLatest } from "redux-saga/effects";
import type from "../../../store/actionTypes";
import actionCreator from "../../../store/actionCreator";
import axios from "axios";
import { TodoPayload } from "../../../types";

const endpoint = "https://jsonplaceholder.typicode.com/todos";

function* getTodos() {
  const data: {data: TodoPayload[]} = yield call(axios.request, {
    url: `${endpoint}`
  });
  yield put(actionCreator.GetTodos(data.data));
}

function* getTodo({ id }: { [key: string]: any }) {
  const data: TodoPayload = yield call(axios.request, {
    url: `${endpoint}/${id}`
  });
  yield put(actionCreator.GetTodo(data));
}

function* addTodo(action: { [key: string]: any }) {
  const { data } = action;
  yield call(axios.request, {
    url: `${endpoint}`,
    method: "post",
    data
  });
  yield getTodos();
}
function* updateTodo(action: { [key: string]: any }) {
  const { data } = action;
  yield call(axios.request, {
    url: `${endpoint}/${data.id}`,
    method: "put",
    data
  });
  yield getTodos();
}

function* removeTodo(action: { [key: string]: any }) {
  const { id } = action;
  yield call(axios.request, {
    url: `${endpoint}/${id}`,
    method: "delete"
  });
  yield getTodos();
}

const request = "_REQUESTED";
function* todoSaga() {
  yield takeLatest(`${type.GET_TODOS}${request}`, getTodos);
  yield takeLatest(`${type.GET_TODO}${request}`, getTodo);
  yield takeLatest(`${type.ADD_TODO}${request}`, addTodo);
  yield takeLatest(`${type.UPDATE_TODO}${request}`, updateTodo);
  yield takeLatest(`${type.REMOVE_TODO}${request}`, removeTodo);
}

export default todoSaga;

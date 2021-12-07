import { PayloadType } from "../types/index";
import type from "./actionTypes";

const AddTodo = (data: any): PayloadType => {
  return {
    type: type.ADD_TODO,
    payload: data
  };
};
const GetTodos = (data: any): PayloadType => {
  return {
    type: type.GET_TODOS,
    payload: data
  };
};

const GetTodo = (data: any): PayloadType => {
  return {
    type: type.GET_TODO,
    payload: data
  }
}

const exports = {
  AddTodo,
  GetTodos,
  GetTodo
};

export default exports;
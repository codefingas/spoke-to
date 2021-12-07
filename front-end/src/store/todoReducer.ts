import { InitialStateInterface, PayloadType } from "../types";
import type from "./actionTypes";

const initialState: InitialStateInterface = {
    taskList: []
};
const reducer = (state = initialState, action: PayloadType) => {
    switch (action.type) {
        case type.GET_TODOS:
            return {
                ...state,
                taskList: action.payload
            };
        case type.ADD_TODO:
            return {
                ...state,
                todoList: action.payload
            };
        default:
            return state;
    }
};
export default reducer;
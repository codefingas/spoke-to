import { all, fork } from "redux-saga/effects";
import todo from "../Components/Tasks/handlers/saga";

function* rootSaga() {
  yield all([todo].map(fork));
}

export default rootSaga;
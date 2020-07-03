import { takeEvery, call, put } from "redux-saga/effects";

function getData() {
  return Promise.resolve().then((response) => ({
    a: 1,
    b: 2,
  }));
}

function* workerSaga() {
  try {
    const payload = yield call(getData);
    console.log("#####Saga######");
    yield put({ type: "DATA_LOADED", payload });
  } catch (e) {
    yield put({ type: "API_ERRORED", payload: e });
  }
}

export default function* watcherSaga() {
  yield takeEvery("DATA_REQUESTED", workerSaga);
}

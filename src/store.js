import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import createSagaMiddleware from "redux-saga";

import rootReducer from "./reducers/index";
import apiSaga from "./sagas/index";

const initialiseSagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  {},
  applyMiddleware(
    logMiddleware,
    log2Middleware,
    thunk,
    initialiseSagaMiddleware
  )
);

initialiseSagaMiddleware.run(apiSaga);

export default store;

export function logMiddleware({ getState, dispatch }) {
  return function (next) {
    return function (action) {
      // do your stuff
      console.info("hyt start");
      next(action);
      console.info("hyt end");
    };
  };
}

export function log2Middleware({ dispatch }) {
  return function (next) {
    return function (action) {
      // do your stuff
      console.info("hyt2 start");
      next(action);
      console.info("hyt2 end");
    };
  };
}

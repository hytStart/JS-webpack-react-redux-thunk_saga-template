import { createAction } from "@reduxjs/toolkit";

import { SET_ABOUT_NAME } from "../constants/actionsTypes";

// export function setName(payload) {
//   return { type: SET_ABOUT_NAME, payload };
// }

export const setName = createAction(SET_ABOUT_NAME);

export function getData({ params, cb }) {
  return function (dispatch) {
    return Promise.resolve().then((payload) => {
      if (cb) {
        cb();
      }
      dispatch({ type: SET_ABOUT_NAME, payload });
    });
  };
}

export function testSaga(url) {
  return { type: "DATA_REQUESTED", payload: { url } };
}

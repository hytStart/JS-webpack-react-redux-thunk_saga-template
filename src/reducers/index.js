import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import { SET_ABOUT_NAME } from "../constants/actionsTypes";

const initialState = {
  name: "hyt",
};

// function about(state = initialState, action) {
//   switch (action.type) {
//     case SET_ABOUT_NAME:
//       return {
//         ...state,
//         name: "wjh",
//       };
//     default:
//       return state;
//   }
// }

const about = createReducer(initialState, {
  [SET_ABOUT_NAME](state, action) {
    const { payload } = action;
    return {
      ...state,
      name: payload || "wjh",
    };
  },
});

const rootReducer = combineReducers({
  about,
});

export default rootReducer;

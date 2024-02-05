import { combineReducers } from "@reduxjs/toolkit";

import examManagerReducer from "./slices/examManager.slice";

const rootReducer = combineReducers({
  examManager: examManagerReducer,
});

export default rootReducer;

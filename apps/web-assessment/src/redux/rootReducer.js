import { combineReducers } from "@reduxjs/toolkit";

import examManagerReducer from "./slices/examManager.slice";
import examsReducer from "./slices/exams.slice";

const rootReducer = combineReducers({
  exams: examsReducer,
  examManager: examManagerReducer,
});

export default rootReducer;

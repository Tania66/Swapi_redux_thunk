import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { postReducer } from "../features/post/postSlice";

const combinedReducer = combineReducers({
  post: postReducer,
});

const rootReducer = (state, action) => {
  if (action.type === "post/reset") {
    state = undefined;
  }
  return combinedReducer(state, action);
};

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

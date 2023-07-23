import { configureStore } from "@reduxjs/toolkit";

import optionReducer from "./features/optionsSlice";
import codeReducer from "./features/codeSlice";
export const store = configureStore({
  reducer: {
    option: optionReducer,
    codes: codeReducer,
  },
  devTools: process.env.NODE_ENV !== "production",
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

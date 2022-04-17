import {
  configureStore,
  ThunkAction,
  Action,
  getDefaultMiddleware,
  ThunkDispatch,
} from "@reduxjs/toolkit";
import reducer from "./rootReducer";

const middlewares = [...getDefaultMiddleware()]; // middleware

const store = configureStore({
  reducer,
  middleware: middlewares,
  devTools: process.env.NODE_ENV !== "production",
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
export type AppThunkDispatch = ThunkDispatch<
  RootState,
  unknown,
  Action<string>
>;
export type AppDispatch = typeof store.dispatch;

export default store;

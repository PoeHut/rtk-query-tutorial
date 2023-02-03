import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import counterReducer from "features/counter/counterSlice";
import { postSlice } from "features/post/postSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    [postSlice.reducerPath]: postSlice.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(postSlice.middleware),
  devTools: true,
});

setupListeners(store.dispatch);

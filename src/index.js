import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "app/store";
import { postSlice } from "features/post/postSlice";
import "assets/css/input.css";
import App from "App";

store.dispatch(postSlice.endpoints.fetchPosts.initiate());

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
);

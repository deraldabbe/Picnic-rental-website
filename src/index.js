
import React from "react";
import ReactDOM from "react-dom";
import Modal from 'react-modal';
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers";
import { AuthProvider } from "./AuthProvider";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const store = configureStore({ reducer: rootReducer });

Modal.setAppElement('#root');

ReactDOM.render(
  <Provider store={store}>
    <AuthProvider>
      <App />
    </AuthProvider>
  </Provider>,
  document.getElementById("root")
);

reportWebVitals();

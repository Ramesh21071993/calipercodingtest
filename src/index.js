import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "./App.css";
import "antd/dist/antd.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter } from "react-router-dom";

import configureStore from "./store/configureStore";

const store = configureStore();
const app = (
  <Provider store={store}>
    <BrowserRouter basename={"/"}>
      <App />
    </BrowserRouter>
  </Provider>
);

ReactDOM.render(app, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

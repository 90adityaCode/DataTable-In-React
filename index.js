import React, { Component } from "react";
import { render } from "react-dom";  
import { Provider } from 'react-redux';
import App from "./src/App";

import { store } from './src/_helpers';
import "./style.css";

render(
  <Provider store={store}>
    <App />
  </Provider>,

  document.getElementById("root")
);

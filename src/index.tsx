import { createOvermind } from "overmind";
import { Provider } from "overmind-react";
import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { config } from "./store";

const overmind = createOvermind(config, { devtools: false });

ReactDOM.render(
  <Provider value={overmind}>
    <App />
  </Provider>,

  document.getElementById("root")
);

reportWebVitals();

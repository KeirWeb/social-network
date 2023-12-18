import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { store } from "./redux/state";

export const rerenderEntireTree = () => {
  ReactDOM.render(<App store={store} />, document.getElementById("root"));
};

rerenderEntireTree();
store.subscribe(rerenderEntireTree);

import App from "./src/components/App";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./src/store/store";
import { BrowserRouter } from "react-router-dom";
import "isomorphic-fetch";
import "babel-polyfill";
const myStore = store(window.PRELOADED_STATE);
function main() {
  ReactDOM.hydrate(
    <App Router={BrowserRouter} store={myStore} />,
    document.getElementById("root")
  );
}

main();

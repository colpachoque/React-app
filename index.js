import App from "./src/components/App";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./src/store/store";
import { BrowserRouter } from "react-router-dom";

function main() {
  ReactDOM.hydrate(
    <App Router={BrowserRouter} store={store} />,
    document.getElementById("root")
  );
}

main();

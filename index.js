import App from "./src/components/App";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./src/store/store";

function main() {
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById("root")
  );
}

main();

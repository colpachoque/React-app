const express = require("express");

const app = express();

if (process.env.NODE_ENV === "development") {
  const webpack = require("webpack");
  const webpackDevMiddleware = require("webpack-dev-middleware");
  const webpackHotMiddleware = require("webpack-hot-middleware");
  const webpackHotServerMiddleware = require("webpack-hot-server-middleware");
  const webpackConfig = require("../wbpk.js");

  console.log(webpackConfig);
  const compiler = webpack(webpackConfig);

  app.use(webpackDevMiddleware(compiler));
  app.use(
    webpackHotMiddleware(compiler.compilers.find(c => c.name === "client"))
  );
  app.use(webpackHotServerMiddleware(compiler));
} else {
  const serverRenderer = require("../src/serverRenderer").default;

  app.use(express.static("public"));
  app.use(serverRenderer());
}

// app.use(require("../src/serverRenderer"));

module.exports = app;

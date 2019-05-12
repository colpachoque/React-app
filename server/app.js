const express = require("express");

const app = express();

if (process.env.NODE_ENV === "development") {
  const webpack = require("webpack");
  const webpackDevMiddleware = require("webpack-dev-middleware");
  const webpackHotMiddleware = require("webpack-hot-middleware");
  const webpackConfig = require("../webpack.config.js");

  console.log(webpackConfig);
  const compiler = webpack(webpackConfig("development"));

  app.use(webpackDevMiddleware(compiler));
  app.use(webpackHotMiddleware(compiler));
} else {
  app.use(express.static("public"));
}

// app.use(require('../src/serverRenderer'));

module.exports = app;

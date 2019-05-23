const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpack = require("webpack");

module.exports = env => {
  console.log(env);
  return {
    name: "client",
    context: path.join(__dirname, "src"),
    entry: [env === "development" && "../index.js"],
    mode: env.dev ? "development" : "production",
    devtool: env.dev ? "source-map" : false,

    output: {
      filename: "bundle.js",
      path: path.join(__dirname, "dist")
    },

    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new MiniCssExtractPlugin({
        filename: "css/[name].css"
      })
    ],

    resolve: {
      extensions: [".js", ".jsx"],
      alias: {
        "react-dom": "@hot-loader/react-dom"
      }
    },

    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /(node_modules)/,
          use: {
            loader: "babel-loader"
          }
        },
        {
          test: /\.html$/,
          use: [
            {
              loader: "html-loader"
            }
          ]
        },
        // {
        //   test: /\.css$/,
        //   loader: "style-loader"
        // },
        // {
        //   test: /\.css$/,
        //   loader: "css-loader",
        //   query: {
        //     modules: true,
        //     localIdentName: "[name]__[local]___[hash:base64:5]"
        //   }
        // },
        {
          test: /\.css$/,
          include: /src/,
          use: [
            env === "development"
              ? "style-loader"
              : MiniCssExtractPlugin.loader,
            {
              loader: "css-loader",
              options: {
                modules: true,
                localIdentName: "[name]"
              }
            }
          ]
        },
        {
          test: /\.(png|jpg|gif)$/,
          use: [
            {
              loader: "file-loader",
              options: {}
            }
          ]
        }
      ]
    },

    watch: env.dev
  };
};

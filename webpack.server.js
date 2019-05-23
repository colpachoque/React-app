const nodeExternals = require("webpack-node-externals");

module.exports = {
  name: "server",
  target: "node",
  mode: "development",
  entry: "./src/serverRenderer.js",
  externals: [nodeExternals()],
  output: {
    filename: "js/serverRenderer.js",
    libraryTarget: "commonjs2"
  },

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
      //     test: /\.css$/,
      //     loader: "style-loader"
      // },
      {
        test: /\.css$/,
        include: /src/,
        use: [
          {
            loader: "css-loader/locals",
            options: {
              modules: true,
              localIdentName: "[name]__[local]"
            }
          } // It doesn't embed CSS but only exports the identifier mappings.
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
  }
};

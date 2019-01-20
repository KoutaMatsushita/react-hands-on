import * as webpack from "webpack"

const path = require("path")

module.exports = {
  mode: "development",
  devtool: "source-map",
  entry: path.resolve(__dirname, "src", "app.jsx"),
  output: {
    path: path.resolve(__dirname, "src", "dist"),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loaders: [
          {
            loader: "babel-loader",
          },
          {
            loader: "ts-loader",
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"]
  },
  devServer: {
    host: "0.0.0.0",
    port: 8080,
    hot: true,
    publicPath: "/",
    historyApiFallback: true
  },
} as webpack.Configuration
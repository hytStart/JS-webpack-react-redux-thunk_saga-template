const merge = require("webpack-merge");
// const UglifyJSPlugin = require("uglifyjs-webpack-plugin");
const base = require("./webpack.base.js");
const webpack = require("webpack");

module.exports = merge(base, {
  mode: "production",
  devtool: "source-map",
  plugins: [
    // new UglifyJSPlugin(),
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify("production"),
    }),
  ],
});

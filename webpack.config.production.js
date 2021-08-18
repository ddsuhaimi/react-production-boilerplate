const HtmlWebpackPlugin = require("html-webpack-plugin");
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const path = require("path");
const webpack = require("webpack");

// const port = process.env.PORT || 3000;


module.exports = (env, argv) => {
  return {
    mode: "production", 
    entry: [path.join(__dirname, "src", "index.js")],
    output: {
      filename: "[name].[contenthash].bundle.js",
      path: path.resolve(__dirname, "public"),
    },
    devtool: "source-map",
    devServer: {
      contentBase: path.join(__dirname, "public"),
      hot: true,
    },
    module: {
      rules: [
        {
          test: /\.(j|t)sx?$/,
          exclude: /node_modules/,
          resolve: { extensions: [".js", ".jsx"] },
          use: [
            {
              loader: "babel-loader",
            },
          ],
        },
        {
          test: /\.css$/,
          use: [MiniCssExtractPlugin.loader, "css-loader"],
        },
        {
          test: /\.(png|jpe?g|gif)$/i,
          use: [
            {
              loader: "file-loader",
            },
          ],
        },
      ],
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: '[name].[contenthash].css'
      }),
      new HtmlWebpackPlugin({
        template: path.join(__dirname, "src", "index.html"),
      }),
    ],
  };
};

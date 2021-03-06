const HtmlWebpackPlugin = require("html-webpack-plugin");
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");
const path = require("path");
const webpack = require("webpack");

// const port = process.env.PORT || 3000;


module.exports = (env, argv) => {
  const isProduction = env.prod
  return {
    mode: "development",
    entry: [path.join(__dirname, "src", "index.js")],
    output: {
      filename: "[name].[contenthash].bundle.js",
      path: path.resolve(__dirname, "public"),
    },
    devtool: "inline-source-map",
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
          use: ["style-loader", "css-loader"],
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
      new HtmlWebpackPlugin({
        template: path.join(__dirname, "src", "index.html"),
      }),
      new webpack.HotModuleReplacementPlugin(),
      !isProduction && new ReactRefreshWebpackPlugin(),
    ].filter(Boolean),
  };
};

const { merge } = require("webpack-merge");
const webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const common = require("./webpack.common");
const paths = require("./paths");

module.exports = merge(common, {
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    historyApiFallback: true,
    contentBase: paths.build,
    open: true,
    hot: true,
    port: 9000,
    compress: true,
    clientLogLevel: "silent",
  },
  plugins: [
    new MiniCssExtractPlugin(),
    new webpack.HotModuleReplacementPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.s?css$/i,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
    ],
  },
  optimization: {
    minimizer: ["...", new CssMinimizerPlugin()],
  },
  resolve: {
    alias: {
      "@": paths.src,
    },
    extensions: [".tsx", ".ts", ".jsx", ".js"],
  },
});

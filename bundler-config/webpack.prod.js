const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const paths = require("./paths");

module.exports = {
  mode: "production",
  devtool: false,
  output: {
    path: paths.build,
    publicPath: "/",
    filename: "js/[name].[contenthash].bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.s?css)$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              importLoaders: 2,
              sourceMap: false,
              modules: true,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "styles/[name].[contenthash].css",
      chunkFilename: "[id].css",
    }),
  ],

  optimization: {
    minimize: true,
    minimizer: ["...", new CssMinimizerPlugin()],
    runtimeChunk: "single",
  },
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000,
  },
};

const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ESLintPlugin = require("eslint-webpack-plugin");
const WindiCSS = require("windicss-webpack-plugin").default;
const paths = require("./paths");

module.exports = {
  entry: paths.src + "/index.tsx",
  output: {
    path: paths.build,
    filename: "[name].bundle.js",
  },
  plugins: [
    new ForkTsCheckerWebpackPlugin(),
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: paths.public,
          to: "assets",
          globOptions: {
            ignore: ["*.DS_Store"],
          },
          noErrorOnMissing: true,
        },
      ],
    }),
    new HtmlWebpackPlugin({
      title: "Pokédex",
      favicon: paths.src + "/images/favicon.ico",
      template: paths.src + "/template.html",
      filename: "index.html",
    }),
    new ESLintPlugin({
      extensions: ["js", "jsx", "ts", "tx"],
      files: [".", "src", "webpack-config"],
    }),
    new WindiCSS(),
  ],
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include: paths.src,
        exclude: /node_modules/,
        use: "babel-loader",
      },
      {
        test: /\.tsx?$/,
        include: paths.src,
        exclude: /node_modules/,
        loader: "ts-loader",
        options: {
          transpileOnly: true,
        },
      },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: "asset/resource",
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
        type: "asset/inline",
      },
    ],
  },
  resolve: {
    alias: {
      "@": paths.src,
    },
    extensions: [".tsx", "ts", ".jsx", ".js", ".json"],
  },
};

const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCSSExtractPlugin = require("mini-css-extract-plugin");

console.log(process.env.NODE_ENV);

const isDev = process.env.NODE_ENV !== "production";

module.exports = {
  entry: {
    app: "./src/index.js",
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "../dist"),
    // publicPath: "/assets/",
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [{ loader: "babel-loader" }],
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          isDev
            ? {
                loader: "style-loader",
              }
            : {
                loader: MiniCSSExtractPlugin.loader,
                options: {
                  // 只在开发模式中启用热更新
                  hmr: isDev,
                  // 如果模块热更新不起作用，重新加载全部样式
                  reloadAll: true,
                },
              },
          {
            loader: "css-loader",
            options: {
              modules: {
                localIdentName: "[name]__[local]--[hash:base64:5]", // css-loader >= 3.x，localIdentName放在modules里  https://github.com/rails/webpacker/issues/2197
              },
            },
          },
          {
            loader: "postcss-loader",
          },
          // {
          //   loader: "less-loader",
          // },
        ],
      },
      {
        test: /\.css$/,
        include: /node_modules/,
        use: [
          isDev
            ? {
                loader: "style-loader",
              }
            : {
                loader: MiniCSSExtractPlugin.loader,
                options: {
                  // 只在开发模式中启用热更新
                  hmr: isDev,
                  // 如果模块热更新不起作用，重新加载全部样式
                  reloadAll: true,
                },
              },
          {
            loader: "css-loader",
          },
          // {
          //   loader: "less-loader",
          // },
        ],
      },
      {
        test: /\.less$/,
        exclude: /node_modules/,
        use: [
          isDev
            ? {
                loader: "style-loader", // creates style nodes from JS strings
              }
            : {
                loader: MiniCSSExtractPlugin.loader,
                options: {
                  // 只在开发模式中启用热更新
                  hmr: isDev,
                  // 如果模块热更新不起作用，重新加载全部样式
                  reloadAll: true,
                },
              },
          {
            loader: "css-loader", // translates CSS into CommonJS
            options: {
              modules: {
                localIdentName: "[name]__[local]--[hash:base64:5]", // css-loader >= 3.x，localIdentName放在modules里  https://github.com/rails/webpacker/issues/2197
              },
            },
          },
          {
            loader: "postcss-loader",
          },
          {
            loader: "less-loader", // compiles Less to CSS
          },
        ],
      },
      {
        test: /\.less$/,
        include: /node_modules/,
        use: [
          isDev
            ? {
                loader: "style-loader", // creates style nodes from JS strings
              }
            : {
                loader: MiniCSSExtractPlugin.loader,
                options: {
                  // 只在开发模式中启用热更新
                  hmr: isDev,
                  // 如果模块热更新不起作用，重新加载全部样式
                  reloadAll: true,
                },
              },
          {
            loader: "css-loader", // translates CSS into CommonJS
          },
          {
            loader: "less-loader", // compiles Less to CSS
            options: { lessOptions: { javascriptEnabled: true } }, // less@3.x，需要开启 配置项 javascriptEnabled: true, less-loader高版本需要lessOptions。https://github.com/ant-design/ant-design/issues/7927  https://github.com/ant-design/ant-design/issues/23624
          },
        ],
      },
      {
        test: /\.(mp4|ogg)$/,
        use: [
          {
            loader: "file-loader",
          },
        ],
      },
      {
        test: /\.(png|jpg|jpeg|gif|eot|svg|ttf|woff|woff2)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 8192,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: "Output Management",
      template: "./src/index.html",
    }),
    new MiniCSSExtractPlugin({
      filename: "[name].[contenthash].css",
    }),
  ],
  optimization: {
    runtimeChunk: {
      name: "manifest",
    },
    splitChunks: {
      chunks: "async",
      minSize: 30000,
      maxSize: 0,
      minChunks: 1,
      maxAsyncRequests: 6,
      maxInitialRequests: 4,
      automaticNameDelimiter: "~",
      cacheGroups: {
        defaultVendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true,
        },
      },
    },
  },
  resolve: {
    extensions: [".js", ".json", ".jsx", ".css"],
    alias: {
      // 模块别名列表
      module: "new-module",
      // 起别名："module" -> "new-module" 和 "module/path/file" -> "new-module/path/file"
      $: path.resolve(__dirname, "../src"),
      $Components: path.resolve(__dirname, "../src/components"),
      $Containers: path.resolve(__dirname, "../src/containers"),
      $Constants: path.resolve(__dirname, "../src/constatns"),
      $Actions: path.resolve(__dirname, "../src/actions"),
      $Assets: path.resolve(__dirname, "../src/assets"),
      $Utils: path.resolve(__dirname, "../src/utils"),
      // 起别名 "module" -> "./app/third/module.js" 和 "module/file" 会导致错误
      // 模块别名相对于当前上下文导入
    },
  },
};

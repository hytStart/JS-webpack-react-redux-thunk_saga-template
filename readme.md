### TODO:

#### 1. Manifest: https://www.webpackjs.com/guides/output-management/#manifest

```
optimization: {
  runtimeChunk: {
    name: "manifest",
  },
},
```

#### 2. MiniCssExtractPlugin ✅

https://webpack.js.org/plugins/mini-css-extract-plugin/#root

但是热更新有问题，暂定 dev 使用 style-loader, prod 使用 minicss

extractLess

#### 3. hmr ✅

##### 4. 动态路由切割 ✅

（https://reacttraining.com/react-router/web/guides/quick-start / https://www.npmjs.com/package/react-loadable）

#### 5. lint

#### 6. axios // todo

#### 7. devserver proxy ✅

#### 8. 脚本部署

#### 步骤 :

1. webpack 搭建 -> react (https://juejin.im/post/5e0aaa485188254962077c75#heading-19) -> antd -> react-router(https://reacttraining.com/react-router/web/guides/quick-start) -> react-redux （https://juejin.im/post/5dc82bfee51d4523815886c9） -> thunk/saga(babel-polyfill)/ (https://www.valentinog.com/blog/redux/) -> createReducer, createAction 替换,createSelector(创建一个有记忆的 selectror)，路由切割 -> 优化(postcss-loader， url-loader, hmr) -> axios, devserver proxy,

-> ssr

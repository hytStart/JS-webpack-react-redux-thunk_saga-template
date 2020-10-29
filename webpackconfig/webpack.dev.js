const webpack = require('webpack');
const merge = require('webpack-merge');
const base = require('./webpack.base.js');

const port = 8081;
const { NODE_ENV } = process.env;

const isLocal = NODE_ENV === 'local';

let proxy = {
  '/api/*': {
    target: 'http://172.16.109.203:8080',
    changeOrigin: true,
    onProxyReq(proxyReq, req) {
      console.info(
        `联调/测试请求地址：${proxy['/api/*'].target}${req.originalUrl}`,
      );
    },
  },
};

// 本地环境配置
if (isLocal) {
  proxy = {
    '/api/*': {
      target: `http://127.0.0.1:${port}`,
      pathRewrite(paths, req) {
        console.info(`本地请求地址：${req.originalUrl}`);
        return `${paths.replace(/^\/api/, '/mock/api/')}.json`;
      },
      changeOrigin: true,
      onProxyReq(proxyReq, req, res) {
        proxyReq.method = 'GET';
        proxyReq.setHeader('Access-Control-Allow-Origin', true);
      },
    },
  };
}

module.exports = merge(base, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './src/',
    port,
    hot: true,
    open: true,
    host: '0.0.0.0',
    useLocalIp: true,
    historyApiFallback: true, // 针对broswer-router
    proxy,
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
  ],
});

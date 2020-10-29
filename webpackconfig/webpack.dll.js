const path = require('path')
const webpack = require('webpack')

const vendor = ['react', 'react-dom']

const config = {
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  entry: {
    vendor,
  },
  output: {
    path: path.join(__dirname, '/../dist/assets/'),
    filename: 'dll.[name].js',
    library: '[name]_[hash]',
  },
  plugins: [
    new webpack.DllPlugin({
      path: path.join(__dirname, '/../dist/assets/', '[name]-manifest.json'),
      name: '[name]_[hash]',
      context: path.join(__dirname, '/../dist/'),
    }),
  ],
}

module.exports = config

const { join } = require('path');

module.exports = {
  entry: join(__dirname, '/app/base-style-class.js'),
  output: {
    path: join(__dirname, 'dist'),
    publicPath: '/dist/',
    filename: 'base-style.js'
  },
  resolve: {
    extensions: ['.js']
  },
  module: {
    rules: [{ test: /\.(js)$/, exclude: /node_modules/, use: 'babel-loader' }]
  },
  mode: 'development',
  target: 'web'
};

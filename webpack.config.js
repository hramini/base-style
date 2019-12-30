const { join } = require('path');

module.exports = {
  entry: join(__dirname, '/src/index.js'),
  output: {
    path: join(__dirname, 'dist'),
    publicPath: '/dist/',
    filename: 'bundle.js'
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

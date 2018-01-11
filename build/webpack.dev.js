const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const config = require('./webpack.config');

const devServer = {
  historyApiFallback: true,
  noInfo: true,
  port: 8081,
};

module.exports = Object.assign({}, config, {
  devServer,
  output: {
    filename: '[name].js',
    publicPath: '/'
  },
  performance: {
    hints: false
  },
  devtool: '#eval-source-map',
  plugins: [
    new HtmlWebpackPlugin()
  ]
});

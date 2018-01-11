const path = require('path');

const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopywebpackPlugin = require('copy-webpack-plugin');
const cesiumSource = '../node_modules/cesium/Source';
const cesiumWorkers = '../Build/Cesium/Workers';

module.exports = {
  /* 输入文件 */
  entry: path.resolve(__dirname, '../src/main.js'),
  output: {
    /* 输出目录，没有则新建 */
    path: path.resolve(__dirname, '../dist'),
    /* 文件名 */
    filename: 'build.js',
    /* 静态目录，可以直接从这里取文件 */
    publicPath: '/dist',
    sourcePrefix: ''

  },
  amd: {
    // Enable webpack-friendly use of require in Cesium
    toUrlUndefined: true
  },
  resolve: {
    alias: {
      // Cesium module name
      cesium: path.resolve(__dirname, cesiumSource)
    }
  },
  module: {
    rules: [
      /* 用来解析vue后缀的文件 */
      {
        test: /\.vue$/,
        use: 'vue-loader'
      },
      /* 用babel来解析js文件并把es6的语法转换成浏览器认识的语法 */
      {
        test: /\.js$/,
        use: 'babel-loader',
        /* 排除模块安装目录的文件 */
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }, {
        test: /\.(png|gif|jpg|jpeg|svg|xml|json)$/,
        use: ['url-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html'
    }),
    new CopywebpackPlugin([{ from: 'node_modules/cesium/Build/Cesium/Workers', to: 'Workers' }]),
    new CopywebpackPlugin([{ from: 'node_modules/cesium/Source/Assets', to: 'Assets' }]),
    new CopywebpackPlugin([{ from: 'node_modules/cesium/Source/Widgets', to: 'Widgets' }]),
    new webpack.DefinePlugin({
      // Define relative base path in cesium for loading assets
      CESIUM_BASE_URL: JSON.stringify('')
    })
  ],
  node: {
    // Resolve node module use of fs
    fs: 'empty'
  },
}
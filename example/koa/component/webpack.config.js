const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const webpack_config = {
  entry: {
    hello_world: [path.resolve(__dirname, './hello_world')],
  },
  output: {
    path: '../dist/',
    filename: '[name].js',
    chunkFilename: '[name].chunk.js',
    publicPath: '/assets/'
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            js: 'babel-loader',
            css: ExtractTextPlugin.extract({fallback: 'vue-style-loader', use: 'css-loader'})
          }
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'stage-2']
        },
        exclude: /node_modules/
      },
    ]
  },
  context: path.resolve('../component'),
  plugins: [
    new ExtractTextPlugin('../dist/style/[name].css')
  ]
};


module.exports = webpack_config;

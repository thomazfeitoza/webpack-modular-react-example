'use strict';

const path = require('path');
const webpack = require('webpack');

module.exports = {
  context: __dirname + '/app/client',
  entry: {
    app: './main.js',
    vendor: ['react', 'react-dom', 'react-router-dom']
  },
  output: {
    publicPath: 'http://localhost:4001/',
    path: __dirname + '/dist',
    filename: '[name].js',
    chunkFilename: '[name].js'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      query: {
        plugins: ['syntax-dynamic-import']
      }
    }]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin('vendor')
  ]
};
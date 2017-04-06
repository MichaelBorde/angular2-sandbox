'use strict';

const webpack = require('webpack');
const helpers = require('./helpers');

console.log('webpack.test.js loading');

module.exports = {
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ['babel-loader', 'angular2-template-loader'],
        exclude: /node_modules/
      },
      {
        test: /\.(html|css|scss|png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
        use: ['raw-loader']
      }
    ]
  },
  plugins: [
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
    new webpack.ContextReplacementPlugin(
      /angular(\\|\/)core(\\|\/)(esm(\\|\/)src|src)(\\|\/)linker/,
      helpers.root('src')
    )
  ],
  resolve: {
    modules: [
      helpers.root('src'),
      'node_modules'
    ]
  }
};

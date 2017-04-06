'use strict';

const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const commonConfig = require('./webpack.common.js');
const helpers = require('./helpers');
const configuration = require('../lib/configuration');

console.log('webpack.dev.js loading');

module.exports = webpackMerge(commonConfig(), {
  devtool: 'inline-source-map',

  output: {
    path: helpers.root(configuration.webDestination),
    publicPath: '/',
    filename: '[name].bundle.js',
    sourceMapFilename: '[file].map',
    chunkFilename: '[id].chunk.js'
  },

  plugins: [
    new ExtractTextPlugin('[name].css'),
    new webpack.DefinePlugin({
      productionMode: 'false'
    })
  ]
});

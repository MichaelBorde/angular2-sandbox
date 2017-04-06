'use strict';

const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const commonConfig = require('./webpack.common.js');
const helpers = require('./helpers');
const configuration = require('../lib/configuration');

process.env.NODE_ENV = process.env.ENV = 'production';

console.log('webpack.prod.js loading');

module.exports = webpackMerge(commonConfig(), {
  output: {
    path: helpers.root(configuration.webDestination),
    publicPath: '/',
    filename: '[name].[chunkhash].bundle.js',
    chunkFilename: '[id].[chunkhash].chunk.js'
  },

  plugins: [
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.optimize.UglifyJsPlugin({mangle: {keep_fnames: true}}),
    new ExtractTextPlugin('[name].[contenthash].css'),
    new webpack.DefinePlugin({
      productionMode: 'true'
    })
  ]
});

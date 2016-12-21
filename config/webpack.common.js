const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const autoprefixer = require('autoprefixer');
const helpers = require('./helpers');

module.exports = {
  entry: {
    'polyfills': './src/polyfills.js',
    'vendor': './src/vendor.js',
    'app': './src/main.js'
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['babel-loader', 'angular2-template-loader'],
        exclude: /node_modules/
      },
      {
        test: /\.html$/,
        loader: 'html-loader'
      },
      {
        test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
        loader: 'file-loader?name=assets/[name].[hash].[ext]'
      },
      {
        test: /\.scss$/,
        include: helpers.root('src', 'app', 'style'),
        loader: ExtractTextPlugin.extract('style-loader',
          ['css-loader?sourceMap', 'postcss-loader', 'resolve-url-loader', 'sass-loader?sourceMap'])
      },
      {
        test: /\.css$/,
        include: helpers.root('src', 'app', 'style'),
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader?sourceMap')
      },
      {
        test: /\.scss$/,
        exclude: helpers.root('src', 'app', 'style'),
        loaders: ['raw', 'postcss-loader', 'resolve-url-loader', 'sass-loader?sourceMap']
      }
    ]
  },

  sassLoader: {
    precision: 10
  },

  postcss: () => [autoprefixer],

  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: ['app', 'vendor', 'polyfills']
    }),
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    })
  ]
};

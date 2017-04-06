'use strict';

const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const autoprefixer = require('autoprefixer');
const helpers = require('./helpers');

function config() {
  return {
    entry: {
      'polyfills': './src/polyfills.js',
      'vendor': './src/vendor.js',
      'app': './src/main.js'
    },

    module: {
      rules: [
        {
          test: /\.js$/,
          use: ['babel-loader', 'angular2-template-loader'],
          exclude: /node_modules/
        },
        {
          test: /\.html$/,
          use: [{
            loader: 'html-loader',
            options: {minimize: false}
          }]
        },
        {
          test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
          use: [{
            loader: 'file-loader',
            options: {
              name: 'assets/[name].[hash].[ext]'
            }
          }]
        },
        {
          test: /\.scss$/,
          include: helpers.root('src', 'app', 'style'),
          use: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: [
              {
                loader: 'css-loader',
                options: {sourceMap: true}
              },
              {
                loader: 'postcss-loader',
                options: {
                  plugins: () => [autoprefixer]
                }
              },
              'resolve-url-loader',
              {
                loader: 'sass-loader',
                options: {sourceMap: true, precision: 10}
              }
            ]
          })
        },
        {
          test: /\.css$/,
          include: helpers.root('src', 'app', 'style'),
          use: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: [
              {
                loader: 'css-loader',
                options: {sourceMap: true}
              }
            ]
          })
        },
        {
          test: /\.scss$/,
          exclude: helpers.root('src', 'app', 'style'),
          use: [
            'raw-loader',
            {
              loader: 'postcss-loader',
              options: {
                plugins: () => [autoprefixer]
              }
            },
            'resolve-url-loader',
            {
              loader: 'sass-loader',
              options: {sourceMap: true}
            }]
        }
      ]
    },

    plugins: [
      new webpack.optimize.CommonsChunkPlugin({
        name: ['app', 'vendor', 'polyfills']
      }),
      new HtmlWebpackPlugin({
        template: 'src/index.html'
      }),
      new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
      // https://github.com/angular/angular/issues/11580
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
}

module.exports = config;

'use strict';

const morgan = require('morgan');
const express = require('express');
const history = require('connect-history-api-fallback');
const configuration = require('../configuration');

class Server {

  start() {
    let app = express();
    initializeApplication();
    return startServer();

    function initializeApplication() {
      app.set('trust proxy', true);
      configureLogging();
      configureHistoryFallback();
      configureStaticMiddleware();
    }

    function configureLogging() {
      app.use(morgan('combined'));
    }

    function configureStaticMiddleware() {
      app.use(createStaticMiddleware());
    }

    function createStaticMiddleware() {
      if (configuration.withWebpackMiddleware) {
        const middleware = require('webpack-dev-middleware');
        const webpack = require('webpack');
        return middleware(webpack(require('../../webpack.config')), {stats: {colors: true}});
      }
      return express.static(configuration.webOutput);
    }

    function configureHistoryFallback() {
      app.use(history());
    }

    function startServer() {
      return new Promise(résolve => {
        app.listen(configuration.port, () => {
          let root = `http://localhost:${configuration.port}`;
          console.info('Server started on', root);
          résolve();
        });
      });
    }
  }
}

module.exports = Server;

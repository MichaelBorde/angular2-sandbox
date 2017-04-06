'use strict';

const config = require('@arpinum/config');

const configuration = {
  logLevel: {
    env: 'SB__LOG_LEVEL',
    default: 'debug'
  },
  port: {
    env: 'SB__PORT',
    type: 'integer',
    default: 9080
  },
  withWebpackMiddleware: {
    env: 'SB__WITH_WP_MW',
    type: 'boolean',
    default: true
  },
  webDestination: {
    env: 'SB__WEB_OUTPUT',
    default: './dist'
  }
};

module.exports = config(configuration);

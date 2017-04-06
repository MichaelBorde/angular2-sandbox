'use strict';

module.exports = config => {
  config.set({
    autoWatch: true,
    browsers: ['PhantomJS'],
    files: [
      'karma.entry.js'
    ],
    frameworks: ['mocha'],
    logLevel: config.LOG_INFO,
    phantomJsLauncher: {
      exitOnResourceError: true
    },
    port: 9876,
    preprocessors: {
      'karma.entry.js': ['webpack', 'sourcemap']
    },
    reporters: ['mocha'],
    mochaReporter: {
      showDiff: true
    },
    singleRun: true,
    webpack: require('../webpack/webpack.test.js'),
    webpackServer: {
      noInfo: true
    }
  });
};

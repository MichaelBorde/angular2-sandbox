'use strict';

const {fs} = require('building').files;
const {executeLocal} = require('building').shell;
const gap = require('grunt-as-promised');
const configuration = require('./lib/configuration');

module.exports = grunt => {
  gap.configure(grunt);

  grunt.registerPromiseTask('cleanBuild', () => {
    if (!/^\.\//.test(configuration.webOutput)) {
      throw new Error('Web output seems weird:', configuration.webOutput);
    }
    return fs.remove(configuration.webOutput);
  });

  grunt.registerPromiseTask('webpack:build', () =>
    executeLocal('webpack', ['--bail', '--profile', '--progress', '--config', './config/webpack.prod.js']));

  grunt.registerPromiseTask('live', () =>
    executeLocal(
      'forever', [
        '-m', '5',
        '-w', '--watchDirectory', 'lib',
        '--minUptime', '2000', '--spinSleepTime', '5000',
        './lib/server.js']));

  grunt.registerPromiseTask('eslint', () =>
    executeLocal('eslint', ['.']));

  grunt.registerPromiseTask('mocha:dev', () =>
    executeLocal('mocha', ['./src/**/*.spec.js']));

  grunt.registerPromiseTask('mocha:watch', () =>
    executeLocal('watch', ['--wait', '1', './node_modules/.bin/grunt --force', 'src']));

  grunt.registerTask('info', () => {
    let project = require('./package.json');
    let date = grunt.template.date(new Date(), 'HH:MM:ss');
    grunt.log.writeln(`${date} - ${project.name} (${project.description})`.cyan);
  });

  grunt.registerTask('test', ['mocha:dev', 'eslint']);
  grunt.registerTask('tdd', ['mocha:watch']);
  grunt.registerTask('build', ['cleanBuild', 'webpack:build']);
  grunt.registerTask('default', ['test', 'info']);
};

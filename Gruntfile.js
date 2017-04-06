'use strict';

const {fs} = require('building').files;
const {executeLocal} = require('building').shell;
const gap = require('grunt-as-promised');
const configuration = require('./lib/configuration');

module.exports = grunt => {
  gap.configure(grunt);

  grunt.registerPromiseTask('cleanBuild', () => {
    if (!/^\.\//.test(configuration.webDestination)) {
      throw new Error('Weird web destination:', configuration.webDestination);
    }
    return fs.remove(configuration.webDestination);
  });

  grunt.registerPromiseTask('webpack:build', () =>
    executeLocal('webpack', ['--bail', '-p', '--progress', '--config', './webpack/webpack.prod.js']));

  grunt.registerPromiseTask('live', () =>
    executeLocal(
      'forever', [
        '-m', '5',
        '-w', '--watchDirectory', 'lib',
        '--minUptime', '2000', '--spinSleepTime', '5000',
        './lib/main.js']));

  grunt.registerPromiseTask('eslint', () =>
    executeLocal('eslint', ['.']));

  grunt.registerPromiseTask('karma:test', () =>
    executeLocal('karma', ['start', './karma/karma.conf.js']));

  grunt.registerPromiseTask('karma:watch', () =>
    executeLocal('karma', ['start', './karma/karma.conf.js', '--singleRun=false']));

  grunt.registerTask('info', () => {
    let project = require('./package.json');
    let date = grunt.template.date(new Date(), 'HH:MM:ss');
    grunt.log.writeln(`${date} - ${project.name} (${project.description})`.cyan);
  });

  grunt.registerTask('test', ['karma:test', 'eslint']);
  grunt.registerTask('tdd', ['karma:watch']);
  grunt.registerTask('build', ['cleanBuild', 'webpack:build']);
  grunt.registerTask('default', ['test', 'info']);
};

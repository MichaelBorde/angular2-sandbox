import 'core-js/es6';
import 'core-js/es7/reflect';
import 'zone.js/dist/zone.js';

if (productionMode) { // eslint-disable-line no-undef
  Error.stackTraceLimit = Infinity;
  require('zone.js/dist/long-stack-trace-zone');
}

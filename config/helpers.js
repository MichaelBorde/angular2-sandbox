'use strict';

const path = require('path');

const home = path.resolve(__dirname, '..');

function root(...args) {
  return path.join(home, ...args);
}

exports.root = root;

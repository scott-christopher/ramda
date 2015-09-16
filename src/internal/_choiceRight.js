var _hasMethod = require('./_hasMethod');
var choice = require('../choice');
var compose = require('../compose');
var identity = require('../identity');
var left = require('../left');
var right = require('../right');


module.exports = function _choiceRight(c) {
  if (_hasMethod('right', c)) {
    return c.right();
  } else if (typeof c === 'function') {
    return choice(left, compose(right, c));
  } else {
    throw new TypeError('Invalid argument');
  }
};

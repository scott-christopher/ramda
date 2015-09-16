var _curry3 = require('./internal/_curry3');
var _hasMethod = require('./internal/_hasMethod');
var compose = require('./compose');


module.exports = _curry3(function dimap(fore, hind, fn) {
  if (_hasMethod('dimap', fn)) {
    return fn.dimap(fore, hind);
  } else if (typeof fn === 'function') {
    return compose(hind, fn, fore);
  } else {
    throw new TypeError('Invalid argument');
  }
});

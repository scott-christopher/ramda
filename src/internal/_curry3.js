var _curry1 = require('./_curry1');
var _curry2 = require('./_curry2');
var _fnName = require('./_fnName');
var _isPlaceholder = require('./_isPlaceholder');
var _setFnName = require('./_setFnName');


/**
 * Optimized internal three-arity curry function.
 *
 * @private
 * @category Function
 * @param {Function} fn The function to curry.
 * @return {Function} The curried function.
 */
module.exports = function _curry3(fn) {
  var fnName = _fnName(fn);
  var curriedFn = _setFnName(fnName, function(a, b, c) {
    switch (arguments.length) {
      case 0:
        return curriedFn;
      case 1:
        return _isPlaceholder(a) ? curriedFn
             : _curry2(_setFnName(fnName, function(_b, _c) { return fn(a, _b, _c); }));
      case 2:
        return _isPlaceholder(a) && _isPlaceholder(b) ? curriedFn
             : _isPlaceholder(a) ? _curry2(_setFnName(fnName, function(_a, _c) { return fn(_a, b, _c); }))
             : _isPlaceholder(b) ? _curry2(_setFnName(fnName, function(_b, _c) { return fn(a, _b, _c); }))
             : _curry1(_setFnName(fnName, function(_c) { return fn(a, b, _c); }));
      default:
        return _isPlaceholder(a) && _isPlaceholder(b) && _isPlaceholder(c) ? curriedFn
             : _isPlaceholder(a) && _isPlaceholder(b) ? _curry2(_setFnName(fnName, function(_a, _b) { return fn(_a, _b, c); }))
             : _isPlaceholder(a) && _isPlaceholder(c) ? _curry2(_setFnName(fnName, function(_a, _c) { return fn(_a, b, _c); }))
             : _isPlaceholder(b) && _isPlaceholder(c) ? _curry2(_setFnName(fnName, function(_b, _c) { return fn(a, _b, _c); }))
             : _isPlaceholder(a) ? _curry1(_setFnName(fnName, function(_a) { return fn(_a, b, c); }))
             : _isPlaceholder(b) ? _curry1(_setFnName(fnName, function(_b) { return fn(a, _b, c); }))
             : _isPlaceholder(c) ? _curry1(_setFnName(fnName, function(_c) { return fn(a, b, _c); }))
             : fn(a, b, c);
    }
  });
  return curriedFn;
};

var _curry1 = require('./_curry1');
var _fnName = require('./_fnName');
var _isPlaceholder = require('./_isPlaceholder');
var _setFnName = require('./_setFnName');


/**
 * Optimized internal two-arity curry function.
 *
 * @private
 * @category Function
 * @param {Function} fn The function to curry.
 * @return {Function} The curried function.
 */
module.exports = function _curry2(fn) {
  var fnName = _fnName(fn);
  var curriedFn = _setFnName(fnName, function(a, b) {
    switch (arguments.length) {
      case 0:
        return curriedFn;
      case 1:
        return _isPlaceholder(a) ? curriedFn
             : _curry1(_setFnName(fnName, function(_b) { return fn(a, _b); }));
      default:
        return _isPlaceholder(a) && _isPlaceholder(b) ? curriedFn
             : _isPlaceholder(a) ? _curry1(_setFnName(fnName, function(_a) { return fn(_a, b); }))
             : _isPlaceholder(b) ? _curry1(_setFnName(fnName, function(_b) { return fn(a, _b); }))
             : fn(a, b);
    }
  });
  return curriedFn;
};

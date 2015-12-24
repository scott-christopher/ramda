var _fnName = require('./_fnName');
var _isPlaceholder = require('./_isPlaceholder');
var _setFnName = require('./_setFnName');


/**
 * Optimized internal one-arity curry function.
 *
 * @private
 * @category Function
 * @param {Function} fn The function to curry.
 * @return {Function} The curried function.
 */
module.exports = function _curry1(fn) {
  var curriedFn = _setFnName(_fnName(fn), function(a) {
    if (arguments.length === 0 || _isPlaceholder(a)) {
      return curriedFn;
    } else {
      return fn.apply(this, arguments);
    }
  });
  return curriedFn;
};

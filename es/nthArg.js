import _curry1 from './internal/_curry1.js';
import nth from './nth.js';


/**
 * Returns a function which returns its nth argument.
 *
 * @func
 * @memberOf R
 * @since v0.9.0
 * @category Function
 * @sig Number -> *... -> *
 * @param {Number} n
 * @return {Function}
 * @example
 *
 *      R.nthArg(1)('a', 'b', 'c'); //=> 'b'
 *      R.nthArg(-1)('a', 'b', 'c'); //=> 'c'
 */
export default _curry1(function nthArg(n) {
  return function() {
    return nth(n, arguments);
  };
});

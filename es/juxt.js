import _arrayOf from './internal/_arrayOf';
import _curry1 from './internal/_curry1';
import converge from './converge';


/**
 * juxt applies a list of functions to a list of values.
 *
 * @func
 * @memberOf R
 * @since v0.19.0
 * @category Function
 * @sig [(a, b, ..., m) -> n] -> ((a, b, ..., m) -> [n])
 * @param {Array} fns An array of functions
 * @return {Function} A function that returns a list of values after applying each of the original `fns` to its parameters.
 * @example
 *
 *      var range = R.juxt([Math.min, Math.max]);
 *      range(3, 4, 9, -3); //=> [-3, 9]
 */
export default _curry1(function juxt(fns) {
  return converge(_arrayOf, fns);
});

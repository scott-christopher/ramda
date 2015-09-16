var _curry3 = require('./internal/_curry3');


/**
 * Accepts `left` and `right` functions that will be passed as arguments
 * to the `chooser` function. The `chooser` function must return the result
 * of calling one of the `left` or `right` functions.
 *
 * @func
 * @memberOf R
 * @category Function
 * @sig (a -> b) -> (a -> b) -> ((a -> b) -> (a -> b) -> b) -> b
 * @param {Function} left The left choice to be given to the `chooser` function.
 * @param {Function} right The right choice to be given to the `chooser` function.
 * @param {Function} chooser A function that decides to call either `left` or `right`.
 * @return {*}
 * @example
 *
 *      function someFunc(value) {
 *        return function(onError, onSuccess) {
 *          return value === 42 ? onSuccess('foo') : onError('bar');
 *        };
 *      };
 *
 *      var handler = R.choice(errorHandler, successHandler)
 *
 *      handler(someFunc(42)); //=> successHandler('foo')
 *      handler(someFunc(99)); //=> errorHandler('bar')
 */
module.exports = _curry3(function choice(left, right, chooser) {
  return chooser(left, right);
});

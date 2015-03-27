var _curry1 = require('./internal/_curry1');
var apply = require('./apply');
var compose = require('./compose');
var ifElse = require('./ifElse');
var is = require('./is');
var lensIndex = require('./lensIndex');
var lensProp = require('./lensProp');
var map = require('./map');
var pipeL = require('./pipeL');

/**
 * Creates a new lens that is focused on property determined by the path given in
 * the supplied array.
 *
 * @func
 * @memberOf R
 * @category Object
 * @see R.lens
 * @see R.path
 * @sig [String|Number] -> Function
 * @param {Array} segment An array of properties (String) and array indices (Number),
 *                        representing a path.
 * @return {Function} A new lens focused on the property determined by the supplied path.
 * @example
 *
 *      var headLens = R.lensIndex(0);
 *      var secondLens = R.lensIndex(1);
 *      var xLens = R.lensProp('x');
 *      var secondOfXOfHeadLens = R.composeL(secondLens, xLens, headLens);
 *
 *      var source = [{x: [0, 1], y: [2, 3]}, {x: [4, 5], y: [6, 7]}];
 *      secondOfXOfHeadLens(source); //=> 1
 *      secondOfXOfHeadLens.set(123, source); //=> [{x: [0, 123], y: [2, 3]}, {x: [4, 5], y: [6, 7]}]
 */
module.exports = _curry1(compose(apply(pipeL), map(ifElse(is(Number), lensIndex, lensProp))));

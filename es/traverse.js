import _curry3 from './internal/_curry3.js';
import map from './map.js';
import sequence from './sequence.js';


/**
 * Maps an [Applicative](https://github.com/fantasyland/fantasy-land#applicative)-returning
 * function over a [Traversable](https://github.com/fantasyland/fantasy-land#traversable),
 * then uses [`sequence`](#sequence) to transform the resulting Traversable of Applicative
 * into an Applicative of Traversable.
 *
 * Dispatches to the `sequence` method of the third argument, if present.
 *
 * @func
 * @memberOf R
 * @since v0.19.0
 * @category List
 * @sig (Applicative f, Traversable t) => (a -> f a) -> (a -> f b) -> t a -> f (t b)
 * @param {Function} of
 * @param {Function} f
 * @param {*} traversable
 * @return {*}
 * @see R.sequence
 * @example
 *
 *      R.traverse(Maybe.of, R.negate, [Just(1), Just(2), Just(3)]);   //=> Just([-1, -2, -3])
 *      R.traverse(Maybe.of, R.negate, [Just(1), Just(2), Nothing()]); //=> Nothing()
 *
 *      R.traverse(R.of, R.negate, Just([1, 2, 3])); //=> [Just(-1), Just(-2), Just(-3)]
 *      R.traverse(R.of, R.negate, Nothing());       //=> [Nothing()]
 */
export default _curry3(function traverse(of, f, traversable) {
  return sequence(of, map(f, traversable));
});

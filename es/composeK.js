import chain from './chain.js';
import compose from './compose.js';
import identity from './identity.js';
import map from './map.js';
import prepend from './prepend.js';


/**
 * Returns the right-to-left Kleisli composition of the provided functions,
 * each of which must return a value of a type supported by [`chain`](#chain).
 *
 * `R.composeK(h, g, f)` is equivalent to `R.compose(R.chain(h), R.chain(g), R.chain(f))`.
 *
 * @func
 * @memberOf R
 * @since v0.16.0
 * @category Function
 * @sig Chain m => ((y -> m z), (x -> m y), ..., (a -> m b)) -> (m a -> m z)
 * @param {...Function}
 * @return {Function}
 * @see R.pipeK
 * @example
 *
 *      //  parseJson :: String -> Maybe *
 *      //  get :: String -> Object -> Maybe *
 *
 *      //  getStateCode :: Maybe String -> Maybe String
 *      var getStateCode = R.composeK(
 *        R.compose(Maybe.of, R.toUpper),
 *        get('state'),
 *        get('address'),
 *        get('user'),
 *        parseJson
 *      );
 *
 *      getStateCode(Maybe.of('{"user":{"address":{"state":"ny"}}}'));
 *      //=> Just('NY')
 *      getStateCode(Maybe.of('[Invalid JSON]'));
 *      //=> Nothing()
 */
export default function composeK() {
  return compose.apply(this, prepend(identity, map(chain, arguments)));
}

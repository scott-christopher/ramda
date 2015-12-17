import _curry2 from './_curry2.js';
import _flatCat from './_flatCat.js';
import map from '../map.js';


export default _curry2(function _xchain(f, xf) {
  return map(f, _flatCat(xf));
});

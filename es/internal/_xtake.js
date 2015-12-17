import _curry2 from './_curry2.js';
import _reduced from './_reduced.js';
import _xfBase from './_xfBase.js';


export default (function() {
  function XTake(n, xf) {
    this.xf = xf;
    this.n = n;
  }
  XTake.prototype['@@transducer/init'] = _xfBase.init;
  XTake.prototype['@@transducer/result'] = _xfBase.result;
  XTake.prototype['@@transducer/step'] = function(result, input) {
    if (this.n === 0) {
      return _reduced(result);
    } else {
      this.n -= 1;
      return this.xf['@@transducer/step'](result, input);
    }
  };

  return _curry2(function _xtake(n, xf) { return new XTake(n, xf); });
}());

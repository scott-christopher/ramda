var _curry2 = require('./internal/_curry2');
var _withPrism = require('./internal/_withPrism');


module.exports = _curry2(function prismMatching(prism, s) {
  return _withPrism(prism, function(_, x) { return x; })(s);
});

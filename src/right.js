var _curry1 = require('./internal/_curry1');


module.exports = _curry1(function right(v) {
  return function(l, r) {
    return r(v);
  }
});

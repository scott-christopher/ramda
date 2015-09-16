var _curry1 = require('./internal/_curry1');


module.exports = _curry1(function left(v) {
  return function(l) {
    return l(v);
  }
});

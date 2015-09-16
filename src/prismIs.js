var _curry2 = require('./internal/_curry2');
var always = require('./always');
var choice = require('./choice');
var prismMatching = require('./prismMatching');


module.exports = _curry2(function prismIs(prism, s) {
  return choice(always(false), always(true), prismMatching(prism, s));
});

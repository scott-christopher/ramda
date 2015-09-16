var _curry2 = require('./internal/_curry2');
var always = require('./always');
var compose = require('./compose');
var ifElse = require('./ifElse');
var left = require('./left');
var prism = require('./prism');
var right = require('./right');


module.exports = _curry2(function prismNearly(x, p) {
  return prism(always(x), ifElse(p, compose(right, always({})), left));
});

var _curry1 = require('./internal/_curry1');
var equals = require('./equals');
var prismNearly = require('./prismNearly');


module.exports = _curry1(function prismOnly(x){
  return prismNearly(x, equals(x));
});

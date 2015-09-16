var _choiceRight = require('./internal/_choiceRight');
var _curry3 = require('./internal/_curry3');
var _identityType = require('./internal/_identityType');
var choice = require('./choice');
var compose = require('./compose');
var dimap = require('./dimap');
var map = require('./map');


module.exports = _curry3(function prism(b2t, s2Eta, pafb) {
  var f = compose(dimap(s2Eta, choice(_identityType, map(b2t))), _choiceRight);
  return f(pafb);
});

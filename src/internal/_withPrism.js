var _curry2 = require('./_curry2');
var _identityType = require('./_identityType');
var choice = require('../choice');
var compose = require('../compose');
var left = require('../left');
var prop = require('../prop');
var right = require('../right');


function Market(b2t, s2Eta) {
  return {
    dimap: function(s2r, t2u) {
      return Market(
        compose(t2u, b2t),
        compose(
          choice(compose(left, t2u), right),
          compose(s2Eta, s2r)
        )
      );
    },
    right: function() {
      return Market(
        compose(right, b2t),
        choice(
          compose(left, left),
          compose(choice(compose(left, right), right), s2Eta)
        )
      );
    },
    unapply: function(f) {
      return f(b2t, s2Eta);
    }
  }
}

module.exports = _curry2(function _withPrism(stab, f) {
  var identityGet = prop('value');
  return stab(Market(_identityType, right)).unapply(function(b2t, s2Eta) {
    return f(
      compose(identityGet, b2t),
      compose(choice(compose(left, identityGet), right), s2Eta)
    );
  });
});

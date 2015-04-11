var assert = require('assert');

var containsWith = requireR('containsWith');


describe('containsWith', function() {
  var Ro = [{a: 1}, {a: 2}, {a: 3}, {a: 4}];
  var So = [{a: 3}, {a: 4}, {a: 5}, {a: 6}];
  var eqA = function(r, s) { return r.a === s.a; };

  it('determines if an element is the list based on the predicate', function() {
    assert.strictEqual(containsWith(eqA, {a: 3}, So), true);
    assert.strictEqual(containsWith(eqA, {a: 3000}, So), false);
  });
  it('is curried', function() {
    assert.strictEqual(typeof containsWith(eqA), 'function');
    assert.strictEqual(typeof containsWith(eqA)({a: 3}), 'function');
    assert.strictEqual(containsWith(eqA)({a: 3})(Ro), true);
  });
});

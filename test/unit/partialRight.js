var assert = require('assert');

var partialRight = requireR('partialRight');


describe('partialRight', function() {
  var disc = function(a, b, c) { // note disc(3, 7, 4) => 1
    return b * b - 4 * a * c;
  };

  it('caches the initially supplied right-most parameters in the generated function', function() {
    var f = partialRight(disc, 4);
    assert.strictEqual(f(3, 7), 1);
    var g = partialRight(disc, 7, 4);
    assert.strictEqual(g(3), 1);
  });

  it('correctly reports the arity of the new function', function() {
    var f = partialRight(disc, 4);
    assert.strictEqual(f.length, 2);
    var g = partialRight(disc, 7, 4);
    assert.strictEqual(g.length, 1);
  });
});

var assert = require('assert');

var complement = requireR('complement');


describe('complement', function() {
  it('creates boolean-returning function that reverses another', function() {
    var even = function(x) {return x % 2 === 0;};
    var f = complement(even);
    assert.strictEqual(f(8), false);
    assert.strictEqual(f(13), true);
  });

  it('accepts a function that take multiple parameters', function() {
    var between = function(a, b, c) {return a < b && b < c;};
    var f = complement(between);
    assert.strictEqual(f(4, 5, 11), false);
    assert.strictEqual(f(12, 2, 6), true);
  });
});

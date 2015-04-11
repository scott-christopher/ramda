var assert = require('assert');

var _isNaN = requireR('isNaN');
var mean = requireR('mean');


describe('mean', function() {

  it('returns mean of a nonempty list', function() {
    assert.strictEqual(mean([2]), 2);
    assert.strictEqual(mean([2, 7]), 4.5);
    assert.strictEqual(mean([2, 7, 9]), 6);
    assert.strictEqual(mean([2, 7, 9, 10]), 7);
  });

  it('returns NaN for an empty list', function() {
    assert.strictEqual(_isNaN(mean([])), true);
  });

  it('handles array-like object', function() {
    assert.strictEqual(mean((function() { return arguments; }(1, 2, 3))), 2);
  });

});

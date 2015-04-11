var assert = require('assert');

var apply = requireR('apply');
var bind = requireR('bind');


describe('apply', function() {
  it('applies function to argument list', function() {
    assert.strictEqual(apply(Math.max, [1, 2, 3, -99, 42, 6, 7]), 42);
  });

  it('is curried', function() {
    assert.strictEqual(apply(Math.max)([1, 2, 3, -99, 42, 6, 7]), 42);
  });

  it('provides no way to specify context', function() {
    var obj = {method: function() { return this === obj; }};
    assert.strictEqual(apply(obj.method, []), false);
    assert.strictEqual(apply(bind(obj.method, obj), []), true);
  });
});

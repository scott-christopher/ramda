var assert = require('assert');

var eq = requireR('eq');


describe('eq', function() {
  var a = [];
  var b = a;
  it('has Object.is semantics', function() {
    assert.strictEqual(eq(100, 100), true);
    assert.strictEqual(eq(100, '100'), false);
    assert.strictEqual(eq('string', 'string'), true);
    assert.strictEqual(eq([], []), false);
    assert.strictEqual(eq(a, b), true);
    assert.strictEqual(eq(undefined, undefined), true);
    assert.strictEqual(eq(null, undefined), false);

    assert.strictEqual(eq(-0, 0), false);
    assert.strictEqual(eq(0, -0), false);
    assert.strictEqual(eq(NaN, NaN), true);
  });

  it('is curried', function() {
    var isA = eq(a);
    assert.strictEqual(isA([]), false);
  });
});

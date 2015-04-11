var assert = require('assert');

var isArrayLike = requireR('isArrayLike');


describe('isArrayLike', function() {
  it('is true for Arrays', function() {
    assert.strictEqual(isArrayLike([]), true);
    assert.strictEqual(isArrayLike([1, 2, 3, 4]), true);
    assert.strictEqual(isArrayLike([null]), true);
  });

  it('is true for arguments', function() {
    function test() {
      return isArrayLike(arguments);
    }
    assert.strictEqual(test(), true);
    assert.strictEqual(test(1, 2, 3), true);
    assert.strictEqual(test(null), true);
  });

  it('is false for Strings', function() {
    assert.strictEqual(isArrayLike(''), false);
    assert.strictEqual(isArrayLike('abcdefg'), false);
  });

  it('is true for arbitrary objects with numeric length, if extreme indices are defined', function() {
    var obj1 = {length: 0};
    var obj2 = {0: 'something', length: 0};
    var obj3 = {0: void 0, length: 0};
    var obj4 = {0: 'zero', 1: 'one', length: 2};
    var obj5 = {0: 'zero', length: 2};
    var obj6 = {1: 'one', length: 2};
    assert.strictEqual(isArrayLike(obj1), true);
    assert.strictEqual(isArrayLike(obj2), true);
    assert.strictEqual(isArrayLike(obj3), true);
    assert.strictEqual(isArrayLike(obj4), true);
    assert.strictEqual(isArrayLike(obj5), false);
    assert.strictEqual(isArrayLike(obj6), false);
  });

  it('is false for everything else', function() {
    assert.strictEqual(isArrayLike(undefined), false);
    assert.strictEqual(isArrayLike(1), false);
    assert.strictEqual(isArrayLike({}), false);
    assert.strictEqual(isArrayLike(false), false);
    assert.strictEqual(isArrayLike(function() {}), false);
  });
});

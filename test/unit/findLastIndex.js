var assert = require('assert');

var findLastIndex = requireR('findLastIndex');
var into = requireR('into');


describe('findLastIndex', function() {
  var obj1 = {x: 100};
  var obj2 = {x: 200};
  var a = [11, 10, 9, 'cow', obj1, 8, 7, 100, 200, 300, obj2, 4, 3, 2, 1, 0];
  var even = function(x) { return x % 2 === 0; };
  var gt100 = function(x) { return x > 100; };
  var isStr = function(x) { return typeof x === 'string'; };
  var xGt100 = function(o) { return o && o.x > 100; };
  var intoArray = into([]);

  it('returns the index of the last element that satisfies the predicate', function() {
    assert.strictEqual(findLastIndex(even, a), 15);
    assert.strictEqual(findLastIndex(gt100, a), 9);
    assert.strictEqual(findLastIndex(isStr, a), 3);
    assert.strictEqual(findLastIndex(xGt100, a), 10);
  });

  it('returns -1 when no element satisfies the predicate', function() {
    assert.strictEqual(findLastIndex(even, ['zing']), -1);
  });

  it('returns the index of the last element into an array that satisfies the predicate', function() {
    assert.deepEqual(intoArray(findLastIndex(even), a), [15]);
    assert.deepEqual(intoArray(findLastIndex(gt100), a), [9]);
    assert.deepEqual(intoArray(findLastIndex(isStr), a), [3]);
    assert.deepEqual(intoArray(findLastIndex(xGt100), a), [10]);
  });

  it('returns -1 into an array when no element satisfies the predicate', function() {
    assert.deepEqual(intoArray(findLastIndex(even), ['zing']), [-1]);
  });

  it('works when the first element matches', function() {
    assert.strictEqual(findLastIndex(even, [2, 3, 5]), 0);
  });

  it('does not go into an infinite loop on an empty array', function() {
    assert.strictEqual(findLastIndex(even, []), -1);
  });

  it('is curried', function() {
    assert.strictEqual(typeof findLastIndex(even), 'function');
    assert.strictEqual(findLastIndex(even)(a), 15);
  });
});

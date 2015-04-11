var assert = require('assert');

var findIndex = requireR('findIndex');
var into = requireR('into');


describe('findIndex', function() {
  var obj1 = {x: 100};
  var obj2 = {x: 200};
  var a = [11, 10, 9, 'cow', obj1, 8, 7, 100, 200, 300, obj2, 4, 3, 2, 1, 0];
  var even = function(x) { return x % 2 === 0; };
  var gt100 = function(x) { return x > 100; };
  var isStr = function(x) { return typeof x === 'string'; };
  var xGt100 = function(o) { return o && o.x > 100; };
  var intoArray = into([]);

  it('returns the index of the first element that satisfies the predicate', function() {
    assert.strictEqual(findIndex(even, a), 1);
    assert.strictEqual(findIndex(gt100, a), 8);
    assert.strictEqual(findIndex(isStr, a), 3);
    assert.strictEqual(findIndex(xGt100, a), 10);
  });

  it('returns the index of the first element that satisfies the predicate into an array', function() {
    assert.deepEqual(intoArray(findIndex(even), a), [1]);
    assert.deepEqual(intoArray(findIndex(gt100), a), [8]);
    assert.deepEqual(intoArray(findIndex(isStr), a), [3]);
    assert.deepEqual(intoArray(findIndex(xGt100), a), [10]);
  });

  it('returns -1 when no element satisfies the predicate', function() {
    assert.strictEqual(findIndex(even, ['zing']), -1);
    assert.strictEqual(findIndex(even, []), -1);
  });

  it('returns -1 in array when no element satisfies the predicate into an array', function() {
    assert.deepEqual(intoArray(findIndex(even), ['zing']), [-1]);
  });

  it('is curried', function() {
    assert.strictEqual(typeof findIndex(even), 'function');
    assert.strictEqual(findIndex(even)(a), 1);
  });
});

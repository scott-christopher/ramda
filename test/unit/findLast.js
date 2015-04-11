var assert = require('assert');

var findLast = requireR('findLast');
var into = requireR('into');


describe('findLast', function() {
  var obj1 = {x: 100};
  var obj2 = {x: 200};
  var a = [11, 10, 9, 'cow', obj1, 8, 7, 100, 200, 300, obj2, 4, 3, 2, 1, 0];
  var even = function(x) { return x % 2 === 0; };
  var gt100 = function(x) { return x > 100; };
  var isStr = function(x) { return typeof x === 'string'; };
  var xGt100 = function(o) { return o && o.x > 100; };
  var intoArray = into([]);

  it('returns the index of the last element that satisfies the predicate', function() {
    assert.strictEqual(findLast(even, a), 0);
    assert.strictEqual(findLast(gt100, a), 300);
    assert.strictEqual(findLast(isStr, a), 'cow');
    assert.strictEqual(findLast(xGt100, a), obj2);
  });

  it('returns the index of the last element that satisfies the predicate into an array', function() {
    assert.deepEqual(intoArray(findLast(even), a), [0]);
    assert.deepEqual(intoArray(findLast(gt100), a), [300]);
    assert.deepEqual(intoArray(findLast(isStr), a), ['cow']);
    assert.deepEqual(intoArray(findLast(xGt100), a), [obj2]);
  });

  it('returns `undefined` when no element satisfies the predicate', function() {
    assert.strictEqual(findLast(even, ['zing']), undefined);
  });

  it('returns `undefined` into an array when no element satisfies the predicate', function() {
    assert.deepEqual(intoArray(findLast(even), ['zing']), [undefined]);
  });

  it('works when the first element matches', function() {
    assert.strictEqual(findLast(even, [2, 3, 5]), 2);
  });

  it('does not go into an infinite loop on an empty array', function() {
    assert.strictEqual(findLast(even, []), undefined);
  });

  it('is curried', function() {
    assert.strictEqual(typeof findLast(even), 'function');
    assert.strictEqual(findLast(even)(a), 0);
  });
});

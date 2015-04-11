var assert = require('assert');

var add = requireR('add');
var multiply = requireR('multiply');
var reduceIndexed = requireR('reduceIndexed');


describe('reduceIndexed', function() {
  var timesIndexed = function(tot, num, idx) {return tot + (num * idx);};
  var objectify = function(acc, elem, idx) { acc[elem] = idx; return acc;};

  it('works just like normal reduce', function() {
    assert.strictEqual(reduceIndexed(add, 0, [1, 2, 3, 4]), 10);
    assert.strictEqual(reduceIndexed(multiply, 1, [1, 2, 3, 4]), 24);
  });

  it('passes the index as a third parameter to the predicate', function() {
    assert.strictEqual(reduceIndexed(timesIndexed, 0, [1, 2, 3, 4, 5]), 40);
    assert.deepEqual(reduceIndexed(objectify, {}, ['a', 'b', 'c', 'd', 'e']), {a: 0, b: 1, c: 2, d: 3, e: 4});
  });

  it('passes the entire list as a fourth parameter to the predicate', function() {
    var list = [1, 2, 3];
    reduceIndexed(function(acc, x, idx, ls) {
      assert.strictEqual(ls, list);
      return acc;
    }, 0, list);
  });

  it('is curried', function() {
    var addOrConcat = reduceIndexed(add);
    var sum = addOrConcat(0);
    var cat = addOrConcat('');
    assert.strictEqual(sum([1, 2, 3, 4]), 10);
    assert.strictEqual(cat(['1', '2', '3', '4']), '1234');
  });
});

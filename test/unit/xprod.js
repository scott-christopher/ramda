var assert = require('assert');

var xprod = requireR('xprod');


describe('xprod', function() {
  var a = [1, 2], b = ['a', 'b', 'c'];

  it('returns an empty list if either input list is empty', function() {
    assert.deepEqual(xprod([], [1, 2, 3]), []);
    assert.deepEqual(xprod([1, 2, 3], []), []);
  });

  it('creates the collection of all cross-product pairs of its parameters', function() {
    assert.deepEqual(xprod(a, b), [[1, 'a'], [1, 'b'], [1, 'c'], [2, 'a'], [2, 'b'], [2, 'c']]);
  });

  it('is curried', function() {
    var something = xprod(b);
    assert.deepEqual(something(a), [['a', 1], ['a', 2], ['b', 1], ['b', 2], ['c', 1], ['c', 2]]);
  });

  it('correctly reports the arity of curried versions', function() {
    var something = xprod(a);
    assert.deepEqual(something.length, 1);
  });
});

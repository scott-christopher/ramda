var assert = require('assert');

var drop = requireR('drop');


describe('drop', function() {
  it('skips the first `n` elements from a list, returning the remainder', function() {
    assert.deepEqual(drop(3, ['a', 'b', 'c', 'd', 'e', 'f', 'g']), ['d', 'e', 'f', 'g']);
  });

  it('returns an empty array if `n` is too large', function() {
    assert.deepEqual(drop(20, ['a', 'b', 'c', 'd', 'e', 'f', 'g']), []);
  });

  it('is curried', function() {
    var drop2 = drop(2);
    assert.deepEqual(drop2(['a', 'b', 'c', 'd', 'e']), ['c', 'd', 'e']);
    assert.deepEqual(drop2(['x', 'y', 'z']), ['z']);
  });
});

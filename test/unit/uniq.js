var assert = require('assert');

var uniq = requireR('uniq');


describe('uniq', function() {
  it('returns a set from any array (i.e. purges duplicate elements)', function() {
    var list = [1, 2, 3, 1, 2, 3, 1, 2, 3];
    assert.deepEqual(uniq(list), [1, 2, 3]);
  });

  it('keeps elements from the left', function() {
    assert.deepEqual(uniq([1, 2, 3, 4, 1]), [1, 2, 3, 4]);
  });

  it('returns an empty array for an empty array', function() {
    assert.deepEqual(uniq([]), []);
  });
});

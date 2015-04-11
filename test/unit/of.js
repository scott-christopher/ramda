var assert = require('assert');

var of = requireR('of');


describe('of', function() {
  it('returns its argument as an Array', function() {
    assert.deepEqual(of(100), [100]);
    assert.deepEqual(of([100]), [[100]]);
    assert.deepEqual(of(null), [null]);
    assert.deepEqual(of(undefined), [undefined]);
    assert.deepEqual(of([]), [[]]);
  });
});

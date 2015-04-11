var assert = require('assert');

var reverse = requireR('reverse');


describe('reverse', function() {
  it('reverses arrays', function() {
    assert.deepEqual(reverse([1, 2, 3, 4]), [4, 3, 2, 1]);
  });

  it('returns the empty list to itself', function() {
    assert.deepEqual(reverse([]), []);
  });

});

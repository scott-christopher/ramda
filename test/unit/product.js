var assert = require('assert');

var product = requireR('product');


describe('product', function() {
  it('multiplies together the array of numbers supplied', function() {
    assert.strictEqual(product([1, 2, 3, 4]), 24);
  });
});

var assert = require('assert');

var F = requireR('F');


describe('F', function() {
  it('always returns false', function() {
    assert.strictEqual(F(), false);
    assert.strictEqual(F(10), false);
    assert.strictEqual(F(true), false);
  });
});

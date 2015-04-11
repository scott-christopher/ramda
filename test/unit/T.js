var assert = require('assert');

var T = requireR('T');


describe('T', function() {
  it('always returns true', function() {
    assert.strictEqual(T(), true);
    assert.strictEqual(T(10), true);
    assert.strictEqual(T(true), true);
  });
});

var assert = require('assert');

var not = requireR('not');


describe('not', function() {
  it('reverses argument', function() {
    assert.strictEqual(not(false), true);
    assert.strictEqual(not(1), false);
    assert.strictEqual(not(''), true);
  });
});

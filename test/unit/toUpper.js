var assert = require('assert');

var toUpper = requireR('toUpper');


describe('toUpper', function() {
  it('returns the upper-case equivalent of the input string', function() {
    assert.strictEqual(toUpper('abc'), 'ABC');
  });
});

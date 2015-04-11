var assert = require('assert');

var toLower = requireR('toLower');


describe('toLower', function() {
  it('returns the lower-case equivalent of the input string', function() {
    assert.strictEqual(toLower('XYZ'), 'xyz');
  });
});

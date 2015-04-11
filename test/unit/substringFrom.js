var assert = require('assert');

var substringFrom = requireR('substringFrom');


describe('substringFrom', function() {
  it('returns the trailing substring of a string', function() {
    assert.strictEqual(substringFrom(8, 'abcdefghijklm'), 'ijklm');
  });

  it('accepts negative offsets', function() {
    assert.strictEqual(substringFrom(-2, 'Ramda'), 'da');
  });

  it('is curried', function() {
    var after8 = substringFrom(8);
    assert.strictEqual(after8('abcdefghijklm'), 'ijklm');
  });
});

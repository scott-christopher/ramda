var assert = require('assert');

var nthChar = requireR('nthChar');


describe('nthChar', function() {
  it('returns the nth character of the given string', function() {
    assert.strictEqual(nthChar(2, 'Ramda'), 'm');
  });

  it('accepts negative offsets', function() {
    assert.strictEqual(nthChar(-2, 'Ramda'), 'd');
  });

  it('is curried', function() {
    assert.strictEqual(nthChar(2)('Ramda'), 'm');
  });
});

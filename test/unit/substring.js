var assert = require('assert');

var substring = requireR('substring');


describe('substring', function() {
  it('returns the substring of a string', function() {
    assert.strictEqual(substring(2, 5, 'abcdefghijklm'), 'cde');
  });

  it('accepts negative offsets', function() {
    assert.strictEqual(substring(0, -2, 'Ramda'), 'Ram');
    assert.strictEqual(substring(-4, 3, 'Ramda'), 'am');
    assert.strictEqual(substring(-4, -2, 'Ramda'), 'am');
  });

  it('is curried', function() {
    var from2 = substring(2);
    assert.strictEqual(from2(5, 'abcdefghijklm'), 'cde');
    var from2to5 = substring(2, 5);
    assert.strictEqual(from2to5('abcdefghijklm'), 'cde');
  });
});

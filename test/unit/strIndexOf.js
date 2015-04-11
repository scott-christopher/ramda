var assert = require('assert');

var strIndexOf = requireR('strIndexOf');


describe('strIndexOf', function() {
  it('finds the index of a substring inside a string', function() {
    assert.strictEqual(strIndexOf('c', 'abcdefg'), 2);
  });

  it('returns -1 if the value is not found', function() {
    assert.strictEqual(strIndexOf('x', 'abcdefg'), -1);
  });

  it('is curried', function() {
    var findD = strIndexOf('d');
    assert.strictEqual(findD('abcdefg'), 3);
  });
});

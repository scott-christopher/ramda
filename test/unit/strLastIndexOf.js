var assert = require('assert');

var strLastIndexOf = requireR('strLastIndexOf');


describe('strLastIndexOf', function() {
  it('finds the index of a substring inside a string', function() {
    assert.strictEqual(strLastIndexOf('a', 'bananas'), 5);
  });

  it('returns -1 if the value is not found', function() {
    assert.strictEqual(strLastIndexOf('x', 'abcdefg'), -1);
  });

  it('is curried', function() {
    var findA = strLastIndexOf('a');
    assert.strictEqual(findA('banana split'), 5);
  });
});

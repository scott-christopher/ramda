var assert = require('assert');

var or = requireR('or');


describe('or', function() {
  it('compares two values with js &&', function() {
    var someAr = [];
    assert.strictEqual(or(1, 0), 1);
    assert.strictEqual(or(0, 1), 1);
    assert.strictEqual(or(someAr, false), someAr);
    assert.strictEqual(or('', 0), 0);
  });

  it('is curried', function() {
    assert.strictEqual(or('lie')(false), 'lie');
    assert.strictEqual(or(false)(true), true);
    assert.strictEqual(or('')(0), 0);
  });
});

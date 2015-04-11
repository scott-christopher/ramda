var assert = require('assert');

var and = requireR('and');


describe('and', function() {
  it('compares two values with js &&', function() {
    var someAr = [];
    assert.strictEqual(and(1, 1), 1);
    assert.strictEqual(and(1, 0), 0);
    assert.strictEqual(and(true, someAr), someAr);
  });

  it('is curried', function() {
    var halfTruth = and(true);
    assert.strictEqual(halfTruth(false), false);
    assert.strictEqual(halfTruth('lie'), 'lie');
  });
});

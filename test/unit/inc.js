var assert = require('assert');

var inc = requireR('inc');


describe('inc', function() {

  it('increments its argument', function() {
    assert.strictEqual(inc(-1), 0);
    assert.strictEqual(inc(0), 1);
    assert.strictEqual(inc(1), 2);
    assert.strictEqual(inc(12.34), 13.34);
    assert.strictEqual(inc(-Infinity), -Infinity);
    assert.strictEqual(inc(Infinity), Infinity);
  });

});

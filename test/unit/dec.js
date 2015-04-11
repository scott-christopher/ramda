var assert = require('assert');

var dec = requireR('dec');


describe('dec', function() {

  it('decrements its argument', function() {
    assert.strictEqual(dec(-1), -2);
    assert.strictEqual(dec(0), -1);
    assert.strictEqual(dec(1), 0);
    assert.strictEqual(dec(12.34), 11.34);
    assert.strictEqual(dec(-Infinity), -Infinity);
    assert.strictEqual(dec(Infinity), Infinity);
  });

});

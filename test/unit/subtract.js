var assert = require('assert');

var __ = requireR('__');
var subtract = requireR('subtract');


describe('subtract', function() {
  it('subtracts two numbers', function() {
    assert.strictEqual(subtract(22, 7), 15);
  });

  it('is curried', function() {
    var ninesCompl = subtract(9);
    assert.strictEqual(ninesCompl(6), 3);
  });

  it('behaves right curried when passed `R.__` for its first argument', function() {
    var minus5 = subtract(__, 5);
    assert.strictEqual(minus5(17), 12);
  });
});

var assert = require('assert');

var always = requireR('always');


describe('always', function() {
  it('returns a function that returns the object initially supplied', function() {
    var theMeaning = always(42);
    assert.strictEqual(theMeaning(), 42);
    assert.strictEqual(theMeaning(10), 42);
    assert.strictEqual(theMeaning(false), 42);
  });

  it('works with various types', function() {
    assert.strictEqual(always(false)(), false);
    assert.strictEqual(always('abc')(), 'abc');
    assert.deepEqual(always({a: 1, b: 2})(), {a: 1, b: 2});
    var obj = {a: 1, b: 2};
    assert.strictEqual(always(obj)(), obj);
    var now = new Date(1776, 6, 4);
    assert.deepEqual(always(now)(), new Date(1776, 6, 4));
    assert.strictEqual(always(undefined)(), undefined);
  });
});

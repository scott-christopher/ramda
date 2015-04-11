var assert = require('assert');

var nth = requireR('nth');


describe('nth', function() {
  var list = ['foo', 'bar', 'baz', 'quux'];

  it('accepts positive offsets', function() {
    assert.strictEqual(nth(0, list), 'foo');
    assert.strictEqual(nth(1, list), 'bar');
    assert.strictEqual(nth(2, list), 'baz');
    assert.strictEqual(nth(3, list), 'quux');
    assert.strictEqual(nth(4, list), undefined);
  });
  it('accepts negative offsets', function() {
    assert.strictEqual(nth(-1, list), 'quux');
    assert.strictEqual(nth(-2, list), 'baz');
    assert.strictEqual(nth(-3, list), 'bar');
    assert.strictEqual(nth(-4, list), 'foo');
    assert.strictEqual(nth(-5, list), undefined);
  });
  it('is curried', function() {
    assert.strictEqual(nth(0)(list), 'foo');
  });
  it('throws if applied to null or undefined', function() {
    assert.throws(function() { nth(0, null); }, TypeError);
    assert.throws(function() { nth(0, undefined); }, TypeError);
  });
});

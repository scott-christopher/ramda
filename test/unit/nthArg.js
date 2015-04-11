var assert = require('assert');

var nthArg = requireR('nthArg');


describe('nthArg', function() {
  it('returns a function which returns its nth argument', function() {
    assert.strictEqual(nthArg(0)('foo', 'bar'), 'foo');
    assert.strictEqual(nthArg(1)('foo', 'bar'), 'bar');
    assert.strictEqual(nthArg(2)('foo', 'bar'), undefined);
  });

  it('accepts negative offsets', function() {
    assert.strictEqual(nthArg(-1)('foo', 'bar'), 'bar');
    assert.strictEqual(nthArg(-2)('foo', 'bar'), 'foo');
    assert.strictEqual(nthArg(-3)('foo', 'bar'), undefined);
  });

  it('returns a function with length 0', function() {
    assert.strictEqual(nthArg(2).length, 0);
  });
});

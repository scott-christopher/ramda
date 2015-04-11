var assert = require('assert');

var identity = requireR('identity');


describe('identity', function() {
  it('returns its first argument', function() {
    assert.strictEqual(identity(undefined), undefined);
    assert.strictEqual(identity('foo'), 'foo');
    assert.strictEqual(identity('foo', 'bar'), 'foo');
  });

  it('has length 1', function() {
    assert.strictEqual(identity.length, 1);
  });
});

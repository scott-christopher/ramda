var assert = require('assert');

var pathEq = requireR('pathEq');


describe('pathEq', function() {

  var obj = {
    a: 1,
    b: {
      ba: '2'
    }
  };

  it('returns true if the path matches the value', function() {
    assert.strictEqual(pathEq(['a'], 1, obj), true);
    assert.strictEqual(pathEq(['b', 'ba'], '2', obj), true);
  });

  it('returns false for non matches', function() {
    assert.strictEqual(pathEq(['a'], '1', obj), false);
    assert.strictEqual(pathEq(['b', 'ba'], 2, obj), false);
  });

  it('returns false for non existing values', function() {
    assert.strictEqual(pathEq(['c'], 'foo', obj), false);
    assert.strictEqual(pathEq(['c', 'd'], 'foo', obj), false);
  });

  it('accepts empty path', function() {
    assert.strictEqual(pathEq([], 42, {a: 1, b: 2}), false);
    assert.strictEqual(pathEq([], obj, obj), true);
  });

  it('has Object.is semantics', function() {
    assert.strictEqual(pathEq(['value'], -0, {value: 0}), false);
    assert.strictEqual(pathEq(['value'], 0, {value: -0}), false);
    assert.strictEqual(pathEq(['value'], NaN, {value: NaN}), true);
  });

});

var assert = require('assert');

var _isNaN = requireR('isNaN');
var length = requireR('length');


describe('length', function() {
  it('returns the length of a list', function() {
    assert.strictEqual(length([]), 0);
    assert.strictEqual(length(['a', 'b', 'c', 'd']), 4);
  });

  it('returns the length of a string', function() {
    assert.strictEqual(length(''), 0);
    assert.strictEqual(length('xyz'), 3);
  });

  it('returns the length of a function', function() {
    assert.strictEqual(length(function() {}), 0);
    assert.strictEqual(length(function(x, y, z) { return z; }), 3);
  });

  it('returns the length of an arguments object', function() {
    assert.strictEqual(length((function() { return arguments; }())), 0);
    assert.strictEqual(length((function() { return arguments; }('x', 'y', 'z'))), 3);
  });

  it('returns NaN for value of unexpected type', function() {
    assert.strictEqual(_isNaN(length(0)), true);
    assert.strictEqual(_isNaN(length({})), true);
    assert.strictEqual(_isNaN(length(null)), true);
    assert.strictEqual(_isNaN(length(undefined)), true);
  });

  it('returns NaN for length property of unexpected type', function() {
    assert.strictEqual(_isNaN(length({length: ''})), true);
    assert.strictEqual(_isNaN(length({length: '1.23'})), true);
    assert.strictEqual(_isNaN(length({length: null})), true);
    assert.strictEqual(_isNaN(length({length: undefined})), true);
    assert.strictEqual(_isNaN(length({})), true);
  });
});

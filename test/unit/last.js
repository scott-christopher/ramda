var assert = require('assert');

var last = requireR('last');


describe('last', function() {
  it('returns undefined for an empty list', function() {
    assert.strictEqual(typeof(last([])),  'undefined');
  });
  it('returns the first element of a list', function() {
    assert.strictEqual(last(['a', 'b', 'c', 'd']), 'd');
  });
  it('throws if applied to null or undefined', function() {
    assert.throws(function() { last(null); }, TypeError);
    assert.throws(function() { last(undefined); }, TypeError);
  });
});

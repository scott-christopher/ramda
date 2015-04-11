var assert = require('assert');

var head = requireR('head');


describe('head', function() {
  it('returns undefined for an empty list', function() {
    assert.strictEqual(typeof(head([])),  'undefined');
  });
  it('returns the first element of a list', function() {
    assert.strictEqual(head(['a', 'b', 'c', 'd']), 'a');
  });
  it('throws if applied to null or undefined', function() {
    assert.throws(function() { head(null); }, TypeError);
    assert.throws(function() { head(undefined); }, TypeError);
  });
});

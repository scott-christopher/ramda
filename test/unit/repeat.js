var assert = require('assert');

var repeat = requireR('repeat');


describe('repeat', function() {
  it('returns a lazy list of identical values', function() {
    assert.deepEqual(repeat(0, 5), [0, 0, 0, 0, 0]);
  });

  it('can accept any value, including `null`', function() {
    assert.deepEqual(repeat(null, 3), [null, null, null]);
  });

  it('is curried', function() {
    var makeFoos = repeat('foo');
    assert.deepEqual(makeFoos(0), []);
    assert.deepEqual(makeFoos(3), ['foo', 'foo', 'foo']);
  });
});

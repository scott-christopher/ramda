var assert = require('assert');

var fromPairs = requireR('fromPairs');


describe('fromPairs', function() {
  it('combines an array of two-element arrays into an object', function() {
    assert.deepEqual(fromPairs([['a', 1], ['b', 2], ['c', 3]]), {a: 1, b: 2, c: 3});
  });
  it('skips empty Arrays and non-Array elements', function() {
    assert.deepEqual(fromPairs([['a', 1], 'x', [], ['b', 2], {}, ['c', 3]]), {a: 1, b: 2, c: 3});
  });
});

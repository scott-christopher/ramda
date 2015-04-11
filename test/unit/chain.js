var assert = require('assert');

var chain = requireR('chain');
var map = requireR('map');
var multiply = requireR('multiply');


describe('chain', function() {
  it('maps a function over a nested list and returns the (shallow) flattened result', function() {
    var dbl = map(multiply(2));
    assert.deepEqual(chain(dbl, [[1, 2, 3], [1], [0, 10, -3, 5, 7]]), [2, 4, 6, 2, 0, 20, -6, 10, 14]);
    assert.deepEqual(chain(dbl, [[1, 2, 3], []]), [2, 4, 6]);
  });
});

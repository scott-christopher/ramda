var assert = require('assert');

var minBy = requireR('minBy');
var prop = requireR('prop');


describe('minBy', function() {
  it('calculates the smallest value of a list using the supplied comparator', function() {
    assert.deepEqual(minBy(prop('x'), [{x: 3, y: 1}, {x: 5, y: 10}, {x: -2, y: 0}]), {x: -2, y: 0});
  });

  it('returns null for the empty list', function() {
    assert.strictEqual(typeof(minBy(prop('x'), [])), 'undefined');
  });

  it('is curried', function() {
    var lowestX = minBy(prop('x'));
    assert.deepEqual(lowestX([{x: 3, y: 1}, {x: 5, y: 10}, {x: -2, y: 0}]), {x: -2, y: 0});
  });
});

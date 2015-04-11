var assert = require('assert');

var maxBy = requireR('maxBy');
var prop = requireR('prop');


describe('maxBy', function() {
  it('calculates the largest value of a list using the supplied comparator', function() {
    assert.deepEqual(maxBy(prop('x'), [{x: 3, y: 1}, {x: 5, y: 10}, {x: -2, y: 0}]), {x: 5, y: 10});
  });

  it('returns undefined for the empty list', function() {
    assert.strictEqual(maxBy(prop('x'), []), undefined);
  });

  it('is curried', function() {
    var highestX = maxBy(prop('x'));
    assert.deepEqual(highestX([{x: 3, y: 1}, {x: 5, y: 10}, {x: -2, y: 0}]), {x: 5, y: 10});
  });
});

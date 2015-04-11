var assert = require('assert');

var F = requireR('F');
var T = requireR('T');
var uniqWith = requireR('uniqWith');


describe('uniqWith', function() {
  var objs = [
    {x: T, i: 0}, {x: F, i: 1}, {x: T, i: 2}, {x: T, i: 3},
    {x: F, i: 4}, {x: F, i: 5}, {x: T, i: 6}, {x: F, i: 7}
  ];
  var objs2 = [
    {x: T, i: 0}, {x: F, i: 1}, {x: T, i: 2}, {x: T, i: 3},
    {x: F, i: 0}, {x: T, i: 1}, {x: F, i: 2}, {x: F, i: 3}
  ];
  function eqI(x, accX) { return x.i === accX.i; }

  it('returns a set from any array (i.e. purges duplicate elements) based on predicate', function() {
    assert.deepEqual(uniqWith(eqI, objs), objs);
    assert.deepEqual(uniqWith(eqI, objs2), [{x: T, i: 0}, {x: F, i: 1}, {x: T, i: 2}, {x: T, i: 3}]);
  });

  it('keeps elements from the left', function() {
    assert.deepEqual(uniqWith(eqI, [{i: 1}, {i: 2}, {i: 3}, {i: 4}, {i: 1}]), [{i: 1}, {i: 2}, {i: 3}, {i: 4}]);
  });

  it('returns an empty array for an empty array', function() {
    assert.deepEqual(uniqWith(eqI, []), []);
  });

  it('is curried', function() {
    assert.strictEqual(typeof uniqWith(eqI), 'function');
    assert.deepEqual(uniqWith(eqI)(objs), objs);
    assert.deepEqual(uniqWith(eqI)(objs2), [{x: T, i: 0}, {x: F, i: 1}, {x: T, i: 2}, {x: T, i: 3}]);
  });
});

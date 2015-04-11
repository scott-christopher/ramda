var assert = require('assert');

var mapAccum = requireR('mapAccum');


describe('mapAccum', function() {
  var add = function(a, b) {return [a + b, a + b];};
  var mult = function(a, b) {return [a * b, a * b];};
  var concat = function(a, b) {return [a.concat(b), a.concat(b)];};

  it('map and accumulate simple functions over arrays with the supplied accumulator', function() {
    assert.deepEqual(mapAccum(add, 0, [1, 2, 3, 4]), [10, [1, 3, 6, 10]]);
    assert.deepEqual(mapAccum(mult, 1, [1, 2, 3, 4]), [24, [1, 2, 6, 24]]);
  });

  it('returns the list and accumulator for an empty array', function() {
    assert.deepEqual(mapAccum(add, 0, []), [0, []]);
    assert.deepEqual(mapAccum(mult, 1, []), [1, []]);
    assert.deepEqual(mapAccum(concat, [], []), [[], []]);
  });

  it('is curried', function() {
    var addOrConcat = mapAccum(add);
    var sum = addOrConcat(0);
    var cat = addOrConcat('');
    assert.deepEqual(sum([1, 2, 3, 4]), [10, [1, 3, 6, 10]]);
    assert.deepEqual(cat(['1', '2', '3', '4']), ['1234', ['1', '12', '123', '1234']]);
  });

  it('correctly reports the arity of curried versions', function() {
    var sum = mapAccum(add, 0);
    assert.strictEqual(sum.length, 1);
  });
});

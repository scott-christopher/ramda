var assert = require('assert');
var lodash = require('lodash');

var concat = requireR('concat');
var reduce = requireR('reduce');


describe('reduce', function() {
  var add = function(a, b) {return a + b;};
  var mult = function(a, b) {return a * b;};

  it('folds simple functions over arrays with the supplied accumulator', function() {
    assert.strictEqual(reduce(add, 0, [1, 2, 3, 4]), 10);
    assert.strictEqual(reduce(mult, 1, [1, 2, 3, 4]), 24);
  });

  it('dispatches to objects that implement `reduce`', function() {
    var obj = {x: [1, 2, 3], reduce: function(f, acc) { return lodash.reduce(this.x, f, acc); }};
    assert.strictEqual(reduce(add, 0, obj), 6);
    assert.strictEqual(reduce(add, 10, obj), 16);
  });

  it('returns the accumulator for an empty array', function() {
    assert.strictEqual(reduce(add, 0, []), 0);
    assert.strictEqual(reduce(mult, 1, []), 1);
    assert.deepEqual(reduce(concat, [], []), []);
  });

  it('is curried', function() {
    var addOrConcat = reduce(add);
    var sum = addOrConcat(0);
    var cat = addOrConcat('');
    assert.strictEqual(sum([1, 2, 3, 4]), 10);
    assert.strictEqual(cat(['1', '2', '3', '4']), '1234');
  });

  it('correctly reports the arity of curried versions', function() {
    var sum = reduce(add, 0);
    assert.strictEqual(sum.length, 1);
  });
});

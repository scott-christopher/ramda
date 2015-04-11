var assert = require('assert');
var listXf = require('../helpers/listXf');

var all = requireR('all');
var into = requireR('into');


describe('all', function() {
  var even = function(n) {return n % 2 === 0;};
  var T = function() {return true;};
  var isFalse = function(x) { return x === false; };
  var intoArray = into([]);

  it('returns true if all elements satisfy the predicate', function() {
    assert.strictEqual(all(even, [2, 4, 6, 8, 10, 12]), true);
    assert.strictEqual(all(isFalse, [false, false, false]), true);
  });

  it('returns false if any element fails to satisfy the predicate', function() {
    assert.strictEqual(all(even, [2, 4, 6, 8, 9, 10]), false);
  });

  it('returns true for an empty list', function() {
    assert.strictEqual(all(T, []), true);
  });

  it('returns true into array if all elements satisfy the predicate', function() {
    assert.deepEqual(intoArray(all(even), [2, 4, 6, 8, 10, 12]), [true]);
    assert.deepEqual(intoArray(all(isFalse), [false, false, false]), [true]);
  });

  it('returns false into array if any element fails to satisfy the predicate', function() {
    assert.deepEqual(intoArray(all(even), [2, 4, 6, 8, 9, 10]), [false]);
  });

  it('returns true into array for an empty list', function() {
    assert.deepEqual(intoArray(all(T), []), [true]);
  });

  it('works with more complex objects', function() {
    var xs = [{x: 'abc'}, {x: 'ade'}, {x: 'fghiajk'}];
    function len3(o) { return o.x.length === 3; }
    function hasA(o) { return o.x.indexOf('a') > -1; }
    assert.strictEqual(all(len3, xs), false);
    assert.strictEqual(all(hasA, xs), true);
  });

  it('dispatches when given a transformer in list position', function() {
    assert.deepEqual(all(even, listXf), {
      all: true,
      f: even,
      xf: listXf
    });
  });

  it('is curried', function() {
    var count = 0;
    var test = function(n) {count += 1; return even(n);};
    assert.strictEqual(all(test)([2, 4, 6, 7, 8, 10]), false);
  });
});

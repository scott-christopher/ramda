var assert = require('assert');
var lodash = require('lodash');

var add = requireR('add');
var always = requireR('always');
var compose = requireR('compose');
var filter = requireR('filter');
var identity = requireR('identity');
var into = requireR('into');
var map = requireR('map');
var take = requireR('take');


describe('into', function() {
  var isOdd = function(b) {return b % 2 === 1;};
  var addXf = {
    '@@transducer/step': add,
    '@@transducer/init': always(0),
    '@@transducer/result': identity
  };

  it('transduces into arrays', function() {
    assert.deepEqual(into([], map(add(1)), [1, 2, 3, 4]), [2, 3, 4, 5]);
    assert.deepEqual(into([], filter(isOdd), [1, 2, 3, 4]), [1, 3]);
    assert.deepEqual(into([], compose(map(add(1)), take(2)), [1, 2, 3, 4]), [2, 3]);
  });

  it('transduces into strings', function() {
    assert.deepEqual(into('', map(add(1)), [1, 2, 3, 4]), '2345');
    assert.deepEqual(into('', filter(isOdd), [1, 2, 3, 4]), '13');
    assert.deepEqual(into('', compose(map(add(1)), take(2)), [1, 2, 3, 4]), '23');
  });

  it('transduces into objects', function() {
    assert.deepEqual(into({}, identity, [['a', 1], ['b', 2]]), {a: 1, b: 2});
    assert.deepEqual(into({}, identity, [{a: 1}, {b: 2, c: 3}]), {a: 1, b: 2, c: 3});
  });

  it('dispatches to objects that implement `reduce`', function() {
    var obj = {x: [1, 2, 3], reduce: function(f, acc) { return lodash.reduce(this.x, f, acc); }};
    assert.deepEqual(into([], map(add(1)), obj), [2, 3, 4]);
    assert.deepEqual(into([], filter(isOdd), obj), [1, 3]);
  });

  it('is curried', function() {
    var intoArray = into([]);
    var add2 = map(add(2));
    var result = intoArray(add2);
    assert.deepEqual(result([1, 2, 3, 4]), [3, 4, 5, 6]);
  });

  it('allows custom transformer', function() {
    var intoSum = into(addXf);
    var add2 = map(add(2));
    var result = intoSum(add2);
    assert.deepEqual(result([1, 2, 3, 4]), 18);
  });

  it('correctly reports the arity of curried versions', function() {
    var sum = into([], map(add));
    assert.strictEqual(sum.length, 1);
  });
});

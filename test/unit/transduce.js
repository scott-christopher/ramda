var assert = require('assert');
var lodash = require('lodash');

var add = requireR('add');
var append = requireR('append');
var compose = requireR('compose');
var concat = requireR('concat');
var filter = requireR('filter');
var flip = requireR('flip');
var identity = requireR('identity');
var map = requireR('map');
var merge = requireR('merge');
var take = requireR('take');
var transduce = requireR('transduce');


describe('transduce', function() {
  var mult = function(a, b) {return a * b;};
  var isOdd = function(b) {return b % 2 === 1;};
  var addxf = {
    '@@transducer/step': function(acc, x) { return acc + x; },
    '@@transducer/init': function() { return 0; },
    '@@transducer/result': function(x) { return x; }
  };

  var listxf = {
    '@@transducer/step': function(acc, x) { return acc.concat([x]); },
    '@@transducer/init': function() { return []; },
    '@@transducer/result': function(x) { return x; }
  };

  var multxf = {
    '@@transducer/step': function(acc, x) { return acc * x; },
    '@@transducer/init': function() { return 1; },
    '@@transducer/result': function(x) { return x; }
  };

  var toxf = function(fn) {
    return function(xf) {
      return {
        f: fn,
        '@@transducer/step': xf['@@transducer/step'],
        '@@transducer/result': xf['@@transducer/result'],
        xf: xf
      };
    };
  };

  it('transduces into arrays', function() {
    assert.deepEqual(transduce(map(add(1)), flip(append), [], [1, 2, 3, 4]), [2, 3, 4, 5]);
    assert.deepEqual(transduce(filter(isOdd), flip(append), [],  [1, 2, 3, 4]), [1, 3]);
    assert.deepEqual(transduce(compose(map(add(1)), take(2)), flip(append), [],  [1, 2, 3, 4]), [2, 3]);
  });

  it('transduces into strings', function() {
    assert.deepEqual(transduce(map(add(1)), add, '', [1, 2, 3, 4]), '2345');
    assert.deepEqual(transduce(filter(isOdd), add, '', [1, 2, 3, 4]), '13');
    assert.deepEqual(transduce(compose(map(add(1)), take(2)), add, '', [1, 2, 3, 4]), '23');
  });

  it('transduces into objects', function() {
    assert.deepEqual(transduce(map(identity), merge, {}, [{a: 1}, {b: 2, c: 3}]), {a: 1, b: 2, c: 3});
  });

  it('folds transformer objects over a collection with the supplied accumulator', function() {
    assert.strictEqual(transduce(toxf(add), addxf, 0, [1, 2, 3, 4]), 10);
    assert.strictEqual(transduce(toxf(mult), multxf, 1, [1, 2, 3, 4]), 24);
    assert.deepEqual(transduce(toxf(concat), listxf, [0], [1, 2, 3, 4]), [0, 1, 2, 3, 4]);
    assert.strictEqual(transduce(toxf(add), add, 0, [1, 2, 3, 4]), 10);
    assert.strictEqual(transduce(toxf(mult), mult, 1, [1, 2, 3, 4]), 24);
  });

  it('dispatches to objects that implement `reduce`', function() {
    var obj = {x: [1, 2, 3], reduce: function(f, acc) { return lodash.reduce(this.x, f, acc); }};
    assert.strictEqual(transduce(map(add(1)), add, 0, obj), 9);
    assert.strictEqual(transduce(map(add(1)), add, 10, obj), 19);
  });

  it('returns the accumulator for an empty collection', function() {
    assert.strictEqual(transduce(toxf(add), addxf, 0, []), 0);
    assert.strictEqual(transduce(toxf(mult), multxf, 1, []), 1);
    assert.deepEqual(transduce(toxf(concat), listxf, [], []), []);
  });

  it('is curried', function() {
    var addOrCat1 = transduce(toxf(add));
    var addOrCat2 = addOrCat1(addxf);
    var sum = addOrCat2(0);
    var cat = addOrCat2('');
    assert.strictEqual(sum([1, 2, 3, 4]), 10);
    assert.strictEqual(cat(['1', '2', '3', '4']), '1234');
  });

  it('correctly reports the arity of curried versions', function() {
    var sum = transduce(toxf(add), addxf, 0);
    assert.strictEqual(sum.length, 1);
  });
});

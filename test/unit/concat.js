var assert = require('assert');

var __ = requireR('__');
var concat = requireR('concat');


describe('concat', function() {
  it('adds combines the elements of the two lists', function() {
    assert.deepEqual(concat(['a', 'b'], ['c', 'd']), ['a', 'b', 'c', 'd']);
    assert.deepEqual(concat([], ['c', 'd']), ['c', 'd']);
  });

  var z1 = {
    x: 'z1',
    concat: function(that) { return this.x + ' ' + that.x; }
  };
  var z2 = {
    x: 'z2'
  };

  it('adds combines the elements of the two lists', function() {
    assert.deepEqual(concat(['a', 'b'], ['c', 'd']), ['a', 'b', 'c', 'd']);
    assert.deepEqual(concat([], ['c', 'd']), ['c', 'd']);
  });
  it('works on strings', function() {
    assert.strictEqual(concat('foo', 'bar'), 'foobar');
    assert.strictEqual(concat('x', ''), 'x');
    assert.strictEqual(concat('', 'x'), 'x');
    assert.strictEqual(concat('', ''), '');
  });
  it('delegates to non-String object with a concat method, as second param', function() {
    assert.strictEqual(concat(z1, z2), 'z1 z2');
  });
  it('is curried', function() {
    var conc123 = concat([1, 2, 3]);
    assert.deepEqual(conc123([4, 5, 6]), [1, 2, 3, 4, 5, 6]);
    assert.deepEqual(conc123(['a', 'b', 'c']), [1, 2, 3, 'a', 'b', 'c']);
  });
  it('is curried like a binary operator, that accepts an inital placeholder', function() {
    var appendBar = concat(__, 'bar');
    assert.strictEqual(typeof appendBar, 'function');
    assert.strictEqual(appendBar('foo'), 'foobar');
  });
  it('throws if not an array, String, or object with a concat method', function() {
    assert.throws(function() { return concat({}, {}); }, TypeError);
  });
});

var assert = require('assert');

var nAry = requireR('nAry');
var range = requireR('range');
var repeat = requireR('repeat');


describe('nAry', function() {

  function toArray(args) { return Array.prototype.slice.call(args, 0); }

  it('turns multiple-argument function into a nullary one', function() {
    var fn = nAry(0, function(x, y, z) { void z; return toArray(arguments); });
    assert.strictEqual(fn.length, 0);
    assert.deepEqual(fn(1, 2, 3), []);
  });

  it('turns multiple-argument function into a ternary one', function() {
    var fn = nAry(3, function(a, b, c, d) { void d; return toArray(arguments); });
    assert.strictEqual(fn.length, 3);
    assert.deepEqual(fn(1, 2, 3, 4), [1, 2, 3]);
    assert.deepEqual(fn(1), [1, undefined, undefined]);
  });

  it('creates functions of arity less than or equal to ten', function() {
    var fn = nAry(10, function() { return toArray(arguments); });
    assert.strictEqual(fn.length, 10);
    assert.deepEqual(fn.apply(null, range(0, 25)), range(0, 10));

    var undefs = fn();
    var ns = repeat(undefined, 10);
    assert.strictEqual(undefs.length, ns.length);
    var idx = undefs.length;
    while (--idx) {
      assert.strictEqual(undefs[idx], ns[idx]);
    }
  });

  it('throws if n is greater than ten', function() {
    assert.throws(function() {
      nAry(11, function() {});
    }, function(err) {
      return (err instanceof Error &&
              err.message === 'First argument to nAry must be a non-negative integer no greater than ten');
    });
  });

});

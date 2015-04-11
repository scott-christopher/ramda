var assert = require('assert');

var arity = requireR('arity');


describe('arity', function() {
  function a1(w) { return [w]; }
  function a4(w, x, y, z) { return [w, x, y, z]; }

  it('returns a function with length set to passed-in `n`', function() {
    assert.strictEqual(arity(1, a1).length, 1);
    assert.strictEqual(arity(2, a1).length, 2);
    assert.strictEqual(arity(3, a1).length, 3);
    assert.strictEqual(arity(4, a1).length, 4);

    assert.strictEqual(arity(1, a4).length, 1);
    assert.strictEqual(arity(2, a4).length, 2);
    assert.strictEqual(arity(3, a4).length, 3);
    assert.strictEqual(arity(4, a4).length, 4);
  });
  it('passes through any additional arguments above `n`', function() {
    var f1 = arity(2, a1);
    var out1 = f1(1, 2);
    assert.strictEqual(out1.length, 1);
    assert.strictEqual(out1[0], 1);

    var f2 = arity(2, a4);
    var out2 = f2(1, 2);
    assert.strictEqual(out2.length, 4);
    assert.strictEqual(out2[0], 1);
    assert.strictEqual(out2[1], 2);
    assert.strictEqual(out2[2], void 0);
    assert.strictEqual(out2[3], void 0);
  });
  it('throws if n is greater than ten', function() {
    assert.throws(function() {
      arity(11, function() {});
    }, function(err) {
      return (err instanceof Error &&
              err.message === 'First argument to arity must be a non-negative integer no greater than ten');
    });
  });

});

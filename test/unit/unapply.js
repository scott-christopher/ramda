var assert = require('assert');

var apply = requireR('apply');
var identity = requireR('identity');
var unapply = requireR('unapply');


describe('unapply', function() {
  it('returns a function which is always passed one argument', function() {
    var fn = unapply(function() { return arguments.length; });
    assert.strictEqual(fn(), 1);
    assert.strictEqual(fn('x'), 1);
    assert.strictEqual(fn('x', 'y'), 1);
    assert.strictEqual(fn('x', 'y', 'z'), 1);
  });

  it('forwards arguments to decorated function as an array', function() {
    var fn = unapply(function(xs) { return '[' + xs + ']'; });
    assert.strictEqual(fn(), '[]');
    assert.strictEqual(fn(2), '[2]');
    assert.strictEqual(fn(2, 4), '[2,4]');
    assert.strictEqual(fn(2, 4, 6), '[2,4,6]');
  });

  it('returns a function with length 0', function() {
    var fn = unapply(identity);
    assert.strictEqual(fn.length, 0);
  });

  it('is the inverse of R.apply', function() {
    var a, b, c, d, e, f, g, n;
    var rand = function() {
      return Math.floor(200 * Math.random()) - 100;
    };

    f = Math.max;
    g = unapply(apply(f));
    n = 0;
    while (++n <= 100) {
      a = rand(); b = rand(); c = rand(); d = rand(); e = rand();
      assert.strictEqual(f(a, b, c, d, e), g(a, b, c, d, e));
    }

    f = function(xs) { return '[' + xs + ']'; };
    g = apply(unapply(f));
    n = 0;
    while (++n <= 100) {
      a = rand(); b = rand(); c = rand(); d = rand(); e = rand();
      assert.strictEqual(f([a, b, c, d, e]), g([a, b, c, d, e]));
    }
  });
});

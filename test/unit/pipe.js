var assert = require('assert');

var pipe = requireR('pipe');


describe('pipe', function() {
  function a(x) {return x + 'A';}
  function b(x) {return x + 'B';}
  function c(x) {return x + 'C';}
  function d(x) {return x + 'D';}

  it('executes its passed in functions in order from left to right', function() {
    assert.strictEqual(pipe(a, b, c, d)(''), 'ABCD');
  });

  it('first function is passed multiple args', function() {
    function e(a, b, c) {
      return c + 'E';
    }
    assert.strictEqual(pipe(e, a, b, c)(1, 2, 3), '3EABC');
  });

  it('passes context to functions', function() {
    function x(val) {
      return this.x * val;
    }
    function y(val) {
      return this.y * val;
    }
    function z(val) {
      return this.z * val;
    }
    var context = {
      a: pipe(x, y, z),
      x: 4,
      y: 2,
      z: 1
    };
    assert.strictEqual(context.a(5), 40);
  });

  it('throws if given no arguments', function() {
    assert.throws(function() { pipe(); });
  });

  it('can be applied to one argument', function() {
    var f = function(a, b, c) { return [a, b, c]; };
    var g = pipe(f);
    assert.strictEqual(g.length, 3);
    assert.deepEqual(g(1, 2, 3), [1, 2, 3]);
  });
});

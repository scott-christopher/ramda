var assert = require('assert');

var constructN = requireR('constructN');


describe('constructN', function() {
  var Circle = function(r) {
    this.r = r;
    this.colors = Array.prototype.slice.call(arguments, 1);
  };
  Circle.prototype.area = function() {return Math.PI * Math.pow(this.r, 2);};

  it('turns a constructor function into a function with n arguments', function() {
    var circle = constructN(2, Circle);
    var c1 = circle(1, 'red');
    assert.strictEqual(c1.constructor, Circle);
    assert.strictEqual(c1.r, 1);
    assert.strictEqual(c1.area(), Math.PI);
    assert.deepEqual(c1.colors, ['red']);

    var regex = constructN(1, RegExp);
    var pattern = regex('[a-z]');
    assert.strictEqual(pattern.constructor, RegExp);
    assert.strictEqual(pattern.source, '[a-z]');
  });

  it('can be used to create Date object', function() {
    var date = constructN(3, Date)(1984, 3, 26);
    assert.strictEqual(date.constructor, Date);
    assert.strictEqual(date.getFullYear(), 1984);
  });

  it('supports constructors with no arguments', function() {
    function Foo() {}
    var foo = constructN(0, Foo)();
    assert.strictEqual(foo.constructor, Foo);
  });

  it('does not support constructor with greater than ten arguments', function() {
    assert.throws(function() {
      function Foo($0, $1, $2, $3, $4, $5, $6, $7, $8, $9, $10) {
        this.eleventh = $10;
      }
      constructN(11, Foo);
    }, function(err) {
      return (err instanceof Error &&
              err.message === 'Constructor with greater than ten arguments');
    });
  });

  it('is curried', function() {
    function G(a, b, c) { this.a = a; this.b = b; this.c = c; }
    var construct2 = constructN(2);
    assert.strictEqual(typeof construct2, 'function');
    var g2 = construct2(G);
    assert.strictEqual(typeof g2, 'function');
    assert.strictEqual(g2('a', 'b').constructor, G);
    assert.strictEqual(g2('a')('b').constructor, G);
  });
});

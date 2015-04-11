var assert = require('assert');

var __ = requireR('__');
var add = requireR('add');
var converge = requireR('converge');


describe('converge', function() {
  var mult = function(a, b) {return a * b;};

  var f1 = converge(mult,
                      function(a) { return a; },
                      function(a) { return a; });
  var f2 = converge(mult,
                      function(a) { return a; },
                      function(a, b) { return b; });
  var f3 = converge(mult,
                      function(a) { return a; },
                      function(a, b, c) { return c; });

  it('passes the results of applying the arguments individually to two separate functions into a single one', function() {
    assert.strictEqual(converge(mult, add(1), add(3))(2), 15); // mult(add1(2), add3(2)) = mult(3, 5) = 3 * 15;
  });

  it('returns a function with the length of the "longest" argument', function() {
    assert.strictEqual(f1.length, 1);
    assert.strictEqual(f2.length, 2);
    assert.strictEqual(f3.length, 3);
  });

  it('returns a curried function', function() {
    assert.strictEqual(f2(6)(7), 42);
    assert.strictEqual(f3(__).length, 3);
  });
});

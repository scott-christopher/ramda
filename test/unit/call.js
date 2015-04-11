var assert = require('assert');

var bind = requireR('bind');
var call = requireR('call');


describe('call', function() {
  it('returns the result of calling its first argument with the remaining arguments', function() {
    assert.strictEqual(call(Math.max, 1, 2, 3, -99, 42, 6, 7), 42);
  });

  it('accepts one or more arguments', function() {
    var fn = function() { return arguments.length; };
    assert.strictEqual(call(fn), 0);
    assert.strictEqual(call(fn, 'x'), 1);
    assert.strictEqual(call(fn, 'x', 'y'), 2);
    assert.strictEqual(call(fn, 'x', 'y', 'z'), 3);
  });

  it('provides no way to specify context', function() {
    var obj = {method: function() { return this === obj; }};
    assert.strictEqual(call(obj.method), false);
    assert.strictEqual(call(bind(obj.method, obj)), true);
  });
});

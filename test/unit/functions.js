var assert = require('assert');

var add = requireR('add');
var functions = requireR('functions');
var reduce = requireR('reduce');


describe('functions', function() {

  function F() {
    this.sort = function() {};
    this.map = function() {};
    this.obj = {};
    this.num = 4;
  }

  F.prototype.x = function() {};
  F.prototype.y = function() {};
  F.prototype.z = {};

  var f = new F();

  it('returns list of functions without prototype functions', function() {
    assert.deepEqual(functions(f).sort(), ['map', 'sort']);
    assert.strictEqual(functions(f).length, 2);
    assert.deepEqual(functions({add: add, reduce: reduce}).sort(), ['add', 'reduce']);
  });

  it('returns an empty array if there are no functions on the object or its prototype chain', function() {
    function G() {}
    assert.deepEqual(functions(new G()), []);
  });
});

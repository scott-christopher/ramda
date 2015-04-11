var assert = require('assert');

var __ = requireR('__');
var has = requireR('has');


describe('has', function() {
  var fred = {name: 'Fred', age: 23};
  var anon = {age: 99};

  it('returns true if the specified property is present', function() {
    assert.strictEqual(has('name', fred), true);
  });

  it('returns false if the specified property is absent', function() {
    assert.strictEqual(has('name', anon), false);
  });

  it('does not check properties from the prototype chain', function() {
    var Person = function() {};
    Person.prototype.age = function() {};

    var bob = new Person();
    assert.strictEqual(has('age', bob), false);
  });

  it('is curried, op-style', function() {
    var hasName = has('name');
    assert.strictEqual(hasName(fred), true);
    assert.strictEqual(hasName(anon), false);

    var point = {x: 0, y: 0};
    var pointHas = has(__, point);
    assert.strictEqual(pointHas('x'), true);
    assert.strictEqual(pointHas('y'), true);
    assert.strictEqual(pointHas('z'), false);
  });
});

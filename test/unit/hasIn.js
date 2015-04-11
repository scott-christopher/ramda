var assert = require('assert');

var hasIn = requireR('hasIn');


describe('hasIn', function() {
  var fred = {name: 'Fred', age: 23};
  var anon = {age: 99};

  it('returns a function that checks the appropriate property', function() {
    var nm = hasIn('name');
    assert.strictEqual(typeof nm, 'function');
    assert.strictEqual(nm(fred), true);
    assert.strictEqual(nm(anon), false);
  });

  it('checks properties from the prototype chain', function() {
    var Person = function() {};
    Person.prototype.age = function() {};

    var bob = new Person();
    assert.strictEqual(hasIn('age', bob), true);
  });

  it('works properly when called with two arguments', function() {
    assert.strictEqual(hasIn('name', fred), true);
    assert.strictEqual(hasIn('name', anon), false);
  });
});

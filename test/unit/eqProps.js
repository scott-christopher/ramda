var assert = require('assert');

var eqProps = requireR('eqProps');


describe('eqProps', function() {
  it('reports whether two objects have the same value for a given property', function() {
    assert.strictEqual(eqProps('name', {name: 'fred', age: 10}, {name: 'fred', age: 12}), true);
    assert.strictEqual(eqProps('name', {name: 'fred', age: 10}, {name: 'franny', age: 10}), false);
  });

  it('has Object.is semantics', function() {
    assert.strictEqual(eqProps('value', {value: 0}, {value: -0}), false);
    assert.strictEqual(eqProps('value', {value: -0}, {value: 0}), false);
    assert.strictEqual(eqProps('value', {value: NaN}, {value: NaN}), true);
  });

  it('is curried', function() {
    var sameName = eqProps('name');
    assert.strictEqual(sameName({name: 'fred', age: 10}, {name: 'fred', age: 12}), true);
  });
});

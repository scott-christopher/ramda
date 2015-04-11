var assert = require('assert');

var assoc = requireR('assoc');


describe('assoc', function() {
  it('makes a shallow clone of an object, overriding only the specified property', function() {
    var obj1 = {a: 1, b: {c: 2, d: 3}, e: 4, f: 5};
    var obj2 = assoc('e', {x: 42}, obj1);
    assert.deepEqual(obj2, {a: 1, b: {c: 2, d: 3}, e: {x: 42}, f: 5});
    // Note: reference equality below!
    assert.strictEqual(obj2.a, obj1.a);
    assert.strictEqual(obj2.b, obj1.b);
    assert.strictEqual(obj2.f, obj1.f);
  });

  it('is the equivalent of clone and set if the property is not on the original', function() {
    var obj1 = {a: 1, b: {c: 2, d: 3}, e: 4, f: 5};
    var obj2 = assoc('z', {x: 42}, obj1);
    assert.deepEqual(obj2, {a: 1, b: {c: 2, d: 3}, e: 4, f: 5, z: {x: 42}});
    // Note: reference equality below!
    assert.strictEqual(obj2.a, obj1.a);
    assert.strictEqual(obj2.b, obj1.b);
    assert.strictEqual(obj2.f, obj1.f);
  });

  it('is curried', function() {
    var obj1 = {a: 1, b: {c: 2, d: 3}, e: 4, f: 5};
    var expected = {a: 1, b: {c: 2, d: 3}, e: {x: 42}, f: 5};
    var f = assoc('e');
    var g = f({x: 42});
    assert.deepEqual(f({x: 42}, obj1), expected);
    assert.deepEqual(g(obj1), expected);
  });
});

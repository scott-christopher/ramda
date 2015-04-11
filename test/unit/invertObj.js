var assert = require('assert');

var invertObj = requireR('invertObj');


describe('invertObj', function() {

  it('takes a list or object and returns an object', function() {
    assert.equal(typeof invertObj([]), 'object');
    assert.equal(typeof invertObj({}), 'object');
  });

  it('returns an empty object when applied to a primitive', function() {
    assert.deepEqual(invertObj(42), {});
    assert.deepEqual(invertObj('abc'), {});
  });

  it('returns an empty object when applied to null/undefined', function() {
    assert.deepEqual(invertObj(null), {});
    assert.deepEqual(invertObj(undefined), {});
  });

  it('returns the input\'s values as keys, and keys as values', function() {
    assert.deepEqual(invertObj(['a', 'b', 'c']),       {a:'0', b:'1', c:'2'});
    assert.deepEqual(invertObj({x:'a', y:'b', z:'c'}), {a:'x', b:'y', c:'z'});
  });

  it('prefers the last key found when handling keys with the same value', function() {
    assert.deepEqual(invertObj(['a', 'b', 'a']), {a:'2', b:'1'});
    assert.deepEqual(invertObj({x:'a', y:'b', z:'a', _id:'a'}), {a: '_id', b: 'y'});
  });

  // this one is more of a sanity check
  it('is not destructive', function() {
    var input = {x:'a', y:'b', z:'a', _id:'a'};
    invertObj(input);
    assert.deepEqual(input, {x:'a', y:'b', z:'a', _id:'a'});
  });
});

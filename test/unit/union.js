var assert = require('assert');

var union = requireR('union');


describe('union', function() {
  var M = [1, 2, 3, 4];
  var N = [3, 4, 5, 6];
  var Mo = [{a: 1}, {a: 2}, {a: 3}, {a: 4}];
  var No = [{a: 3}, {a: 4}, {a: 5}, {a: 6}];
  it('combines two lists into the set of all their elements', function() {
    assert.deepEqual(union(M, N), [1, 2, 3, 4, 5, 6]);
  });

  it('is curried', function() {
    assert.strictEqual(typeof union(M), 'function');
    assert.deepEqual(union(M)(N), [1, 2, 3, 4, 5, 6]);
  });

  it('does not work for non-primitives (use `unionWith`)', function() {
    assert.strictEqual(union(Mo, No).length, 8);
  });
});

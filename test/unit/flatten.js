var assert = require('assert');

var flatten = requireR('flatten');
var range = requireR('range');


describe('flatten', function() {
  it('turns a nested list into one flat list', function() {
    var nest = [1, [2], [3, [4, 5], 6, [[[7], 8]]], 9, 10];
    assert.deepEqual(flatten(nest), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    nest = [[[[3]], 2, 1], 0, [[-1, -2], -3]];
    assert.deepEqual(flatten(nest), [3, 2, 1, 0, -1, -2, -3]);
    assert.deepEqual(flatten([1, 2, 3, 4, 5]), [1, 2, 3, 4, 5]);
  });

  it('is not destructive', function() {
    var nest = [1, [2], [3, [4, 5], 6, [[[7], 8]]], 9, 10];
    assert.notStrictEqual(flatten(nest), nest);
  });

  it('handles ridiculously large inputs', function() {
    assert.strictEqual(flatten([new Array(1000000), range(0, 56000), 5, 1, 3]).length, 1056003);
  });

  it('handles array-like objects', function() {
    var o = {length: 3, 0: [1, 2, [3]], 1: [], 2: ['a', 'b', 'c', ['d', 'e']]};
    assert.deepEqual(flatten(o), [1, 2, 3, 'a', 'b', 'c', 'd', 'e']);
  });

  it('flattens an array of empty arrays', function() {
    assert.deepEqual(flatten([[], [], []]), []);
    assert.deepEqual(flatten([]), []);
  });
});

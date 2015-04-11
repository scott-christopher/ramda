var assert = require('assert');

var insert = requireR('insert');


describe('insert', function() {
  it('inserts an element into the given list', function() {
    var list = ['a', 'b', 'c', 'd', 'e'];
    assert.deepEqual(insert(2, 'x', list), ['a', 'b', 'x', 'c', 'd', 'e']);
  });

  it('inserts another list as an element', function() {
    var list = ['a', 'b', 'c', 'd', 'e'];
    assert.deepEqual(insert(2, ['s', 't'], list), ['a', 'b', ['s', 't'], 'c', 'd', 'e']);
  });

  it('appends to the end of the list if the index is too large', function() {
    var list = ['a', 'b', 'c', 'd', 'e'];
    assert.deepEqual(insert(8, 'z', list), ['a', 'b', 'c', 'd', 'e', 'z']);
  });

  it('is curried', function() {
    var list = ['a', 'b', 'c', 'd', 'e'];
    assert.deepEqual(insert(8)('z')(list), ['a', 'b', 'c', 'd', 'e', 'z']);
    assert.deepEqual(insert(8, 'z')(list), ['a', 'b', 'c', 'd', 'e', 'z']);
  });
});

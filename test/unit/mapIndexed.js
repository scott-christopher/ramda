var assert = require('assert');

var mapIndexed = requireR('mapIndexed');


describe('mapIndexed', function() {
  var times2 = function(x) {return x * 2;};
  var addIndexed = function(x, idx) {return x + idx;};
  var squareEnds = function(x, idx, list) {
    return (idx === 0 || idx === list.length - 1) ? x * x : x;
  };

  it('works just like a normal map', function() {
    assert.deepEqual(mapIndexed(times2, [1, 2, 3, 4]), [2, 4, 6, 8]);
  });

  it('passes the index as a second parameter to the callback', function() {
    assert.deepEqual(mapIndexed(addIndexed, [8, 6, 7, 5, 3, 0, 9]), [8 + 0, 6 + 1, 7 + 2, 5 + 3, 3 + 4, 0 + 5, 9 + 6]);
  });

  it('passes the entire list as a third parameter to the callback', function() {
    assert.deepEqual(mapIndexed(squareEnds, [8, 6, 7, 5, 3, 0, 9]), [64, 6, 7, 5, 3, 0, 81]);
  });

  it('is curried', function() {
    var makeSquareEnds = mapIndexed(squareEnds);
    assert.deepEqual(makeSquareEnds([8, 6, 7, 5, 3, 0, 9]), [64, 6, 7, 5, 3, 0, 81]);
  });
});

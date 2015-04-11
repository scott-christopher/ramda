var assert = require('assert');

var filterIndexed = requireR('filterIndexed');


describe('filterIndexed', function() {
  var even = function(x) {return x % 2 === 0;};
  var everyOther = function(val, idx) {return idx % 2 === 0;};
  var lastTwo = function(val, idx, list) {return list.length - idx < 3;};

  it('works just like a normal filter', function() {
    assert.deepEqual(filterIndexed(even, [1, 2, 3, 4, 5]), [2, 4]);
  });

  it('passes the index as a second parameter to the predicate', function() {
    assert.deepEqual(filterIndexed(everyOther, [8, 6, 7, 5, 3, 0, 9]), [8, 7, 3, 9]);
  });

  it('passes the entire list as a third parameter to the predicate', function() {
    assert.deepEqual(filterIndexed(lastTwo, [8, 6, 7, 5, 3, 0, 9]), [0, 9]);
  });

  it('returns an empty array if no element matches', function() {
    assert.deepEqual(filterIndexed(function(x) { return x > 100; }, [1, 9, 99]), []);
  });

  it('returns an empty array if asked to filter an empty array', function() {
    assert.deepEqual(filterIndexed(function(x) { return x > 100; }, []), []);
  });

  it('is curried', function() {
    var everyOtherPosition = filterIndexed(everyOther);
    assert.deepEqual(everyOtherPosition([8, 6, 7, 5, 3, 0, 9]), [8, 7, 3, 9]);
  });
});

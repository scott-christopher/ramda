var assert = require('assert');

var dropWhile = requireR('dropWhile');


describe('dropWhile', function() {
  it('skips elements while the function reports `true`', function() {
    assert.deepEqual(dropWhile(function(x) {return x < 5;}, [1, 3, 5, 7, 9]), [5, 7, 9]);
  });

  it('returns an empty list for an ampty list', function() {
    assert.deepEqual(dropWhile(function() { return false; }, []), []);
    assert.deepEqual(dropWhile(function() { return true; }, []), []);
  });

  it('starts at the right arg and acknowledges undefined', function() {
    var sublist = dropWhile(function(x) {return x !== void 0;}, [1, 3, void 0, 5, 7]);
    assert.strictEqual(sublist.length, 3);
    assert.strictEqual(sublist[0], void 0);
    assert.strictEqual(sublist[1], 5);
    assert.strictEqual(sublist[2], 7);
  });

  it('is curried', function() {
    var dropLt7 = dropWhile(function(x) {return x < 7;});
    assert.deepEqual(dropLt7([1, 3, 5, 7, 9]), [7, 9]);
    assert.deepEqual(dropLt7([2, 4, 6, 8, 10]), [8, 10]);
  });
});

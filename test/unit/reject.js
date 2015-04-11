var assert = require('assert');

var F = requireR('F');
var filter = requireR('filter');
var reject = requireR('reject');
var T = requireR('T');


describe('reject', function() {
  var even = function(x) {return x % 2 === 0;};

  it('reduces an array to those not matching a filter', function() {
    assert.deepEqual(reject(even, [1, 2, 3, 4, 5]), [1, 3, 5]);
  });

  it('returns an empty array if no element matches', function() {
    assert.deepEqual(reject(function(x) { return x < 100; }, [1, 9, 99]), []);
  });

  it('returns an empty array if asked to filter an empty array', function() {
    assert.deepEqual(reject(function(x) { return x > 100; }, []), []);
  });

  it('returns an empty array if no element matches', function() {
    assert.deepEqual(reject(function(x) { return x < 100; }, [1, 9, 99]), []);
  });

  it('returns an empty array if asked to filter an empty array', function() {
    assert.deepEqual(reject(function(x) { return x > 100; }, []), []);
  });

  it('dispatches to `filter` method', function() {
    function Nothing() {}
    Nothing.value = new Nothing();
    Nothing.prototype.filter = function() {
      return this;
    };

    function Just(x) { this.value = x; }
    Just.prototype.filter = function(pred) {
      return pred(this.value) ? this : Nothing.value;
    };

    var m = new Just(42);
    assert.strictEqual(filter(T, m), m);
    assert.strictEqual(filter(F, m), Nothing.value);
    assert.strictEqual(reject(T, m), Nothing.value);
    assert.strictEqual(reject(F, m), m);
  });

  it('is curried', function() {
    var odd = reject(even);
    assert.deepEqual(odd([1, 2, 3, 4, 5, 6, 7]), [1, 3, 5, 7]);
  });
});

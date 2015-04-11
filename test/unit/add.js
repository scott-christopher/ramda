var assert = require('assert');

var add = requireR('add');


describe('add', function() {
  it('adds together two numbers', function() {
    assert.strictEqual(add(3, 7), 10);
  });

  it('is curried', function() {
    var incr = add(1);
    assert.strictEqual(incr(42), 43);
  });
});

var assert = require('assert');

var prop = requireR('prop');


describe('prop', function() {
  var fred = {name: 'Fred', age: 23};

  it('returns a function that fetches the appropriate property', function() {
    var nm = prop('name');
    assert.strictEqual(typeof nm, 'function');
    assert.strictEqual(nm(fred), 'Fred');
  });
});

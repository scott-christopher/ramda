var assert = require('assert');

var mapObj = requireR('mapObj');


describe('mapObj', function() {
  var square = function(n) {return n * n;};

  it('runs the given function over each of the object properties', function() {
    var obj = {a: 1, b: 2, c: 3};
    assert.deepEqual(mapObj(square, obj), {a: 1, b: 4, c: 9});
  });
});

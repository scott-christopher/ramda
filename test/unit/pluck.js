var assert = require('assert');

var pluck = requireR('pluck');


describe('pluck', function() {
  var people = [
    {name: 'Fred', age: 23},
    {name: 'Wilma', age: 21} ,
    {name: 'Pebbles', age: 2}
  ];

  it('returns a function that maps the appropriate property over an array', function() {
    var nm = pluck('name');
    assert.strictEqual(typeof nm, 'function');
    assert.deepEqual(nm(people), ['Fred', 'Wilma', 'Pebbles']);
  });
});

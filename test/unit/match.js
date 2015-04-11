var assert = require('assert');

var match = requireR('match');


describe('match', function() {
  var re = /[A-Z]\d\d\-[a-zA-Z]+/;

  it('determines whether a string matches a regex', function() {
    assert.strictEqual(match(re, 'B17-afn').length, 1);
    assert.strictEqual(match(re, 'B1-afn'), null);
  });

  it('is curried', function() {
    var format = match(re);
    assert.strictEqual(format('B17-afn').length, 1);
    assert.strictEqual(format('B1-afn'), null);
  });
});

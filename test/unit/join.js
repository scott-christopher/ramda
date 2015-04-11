var assert = require('assert');

var join = requireR('join');


describe('join', function() {
  it("concatenates a list's elements to a string, with an seperator string between elements", function() {
    var list = [1, 2, 3, 4];
    assert.strictEqual(join('~', list), '1~2~3~4');
  });
});

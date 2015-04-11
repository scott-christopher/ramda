var assert = require('assert');

var replace = requireR('replace');


describe('replace', function() {

  it('replaces substrings of the input string', function() {
    assert.strictEqual(replace('1', 'one', '1 two three'), 'one two three');
  });

  it('replaces regex matches of the input string', function() {
    assert.strictEqual(replace(/\d+/g, 'num', '1 2 three'), 'num num three');
  });

  it('is curried up to 3 arguments', function() {
    assert.strictEqual(replace(null).constructor, Function);
    assert.strictEqual(replace(null, null).constructor, Function);

    var replaceSemicolon = replace(';');
    var removeSemicolon = replaceSemicolon('');
    assert.strictEqual(removeSemicolon('return 42;'), 'return 42');
  });

});

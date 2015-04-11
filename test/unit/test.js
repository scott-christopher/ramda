var assert = require('assert');

var test = requireR('test');


describe('test', function() {
  it('returns true if string matches pattern', function() {
    assert.strictEqual(test(/^x/, 'xyz'), true);
  });

  it('returns false if string does not match pattern', function() {
    assert.strictEqual(test(/^y/, 'xyz'), false);
  });

  it('is referentially transparent', function() {
    var pattern = /x/g;
    assert.strictEqual(pattern.lastIndex, 0);
    assert.strictEqual(test(pattern, 'xyz'), true);
    assert.strictEqual(pattern.lastIndex, 0);
    assert.strictEqual(test(pattern, 'xyz'), true);
  });
});

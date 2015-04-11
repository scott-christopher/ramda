var assert = require('assert');

var empty = requireR('empty');


describe('empty', function() {
  it('returns an empty list', function() {
    assert.deepEqual(empty([1, 2, 3]), []);
  });

});

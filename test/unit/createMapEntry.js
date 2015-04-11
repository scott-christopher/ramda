var assert = require('assert');

var createMapEntry = requireR('createMapEntry');


describe('createMapEntry', function() {
  it('creates an object containing a single key:value pair', function() {
    assert.deepEqual(createMapEntry('foo', 42), {foo: 42});
  });

  it('is curried', function() {
    assert.deepEqual(createMapEntry('foo')(42), {foo: 42});
  });
});

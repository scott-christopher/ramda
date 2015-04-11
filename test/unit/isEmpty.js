var assert = require('assert');

var isEmpty = requireR('isEmpty');


describe('isEmpty', function() {
  it('returns false for null', function() {
    assert.strictEqual(isEmpty(null), false);
  });

  it('returns false for undefined', function() {
    assert.strictEqual(isEmpty(undefined), false);
  });

  it('returns true for empty string', function() {
    assert.strictEqual(isEmpty(''), true);
  });

  it('returns true for empty array', function() {
    assert.strictEqual(isEmpty([]), true);
  });

  it('returns true for empty arguments object', function() {
    assert.strictEqual(isEmpty((function() { return arguments; }())), true);
  });

  it('returns true for object with own length property whose value is 0', function() {
    assert.strictEqual(isEmpty({length: 0, x: 1, y: 2}), true);
  });

  it('returns true for object with inherited length property whose value is 0', function() {
    function Empty() {}
    Empty.prototype.length = 0;
    assert.strictEqual(isEmpty(new Empty()), true);
  });

  it('returns false for every other value', function() {
    assert.strictEqual(isEmpty(0), false);
    assert.strictEqual(isEmpty(NaN), false);
    assert.strictEqual(isEmpty(['']), false);
    assert.strictEqual(isEmpty({}), false);

    function Nonempty() {}
    Nonempty.prototype.length = 1;
    assert.strictEqual(isEmpty(new Nonempty()), false);
  });
});

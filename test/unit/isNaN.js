var assert = require('assert');

var _isNaN = requireR('isNaN');


describe('isNaN', function() {

  it('returns true for `NaN`', function() {
    assert.strictEqual(_isNaN(NaN), true);

    assert.strictEqual(isNaN(NaN), true);
  });

  it('returns false for `new Number(NaN)`', function() {
    /* jshint -W053 */
    assert.strictEqual(_isNaN(new Number(NaN)), false);
    /* jshint +W053 */
  });

  it('returns false for any other value', function() {
    assert.strictEqual(_isNaN(void 0), false);
    assert.strictEqual(_isNaN({}), false);

    assert.strictEqual(isNaN(void 0), true);
    assert.strictEqual(isNaN({}), true);
  });

});

var assert = require('assert');

var type = requireR('type');


describe('type', function() {

  it('"Array" if given an array literal', function() {
    assert.strictEqual(type([1, 2, 3]), 'Array');
  });

  it('"Object" if given an object literal', function() {
    assert.strictEqual(type({batman: 'na na na na na na na'}), 'Object');
  });

  it('"RegExp" if given a RegExp literal', function() {
    assert.strictEqual(type(/[A-z]/), 'RegExp');
  });

  it('"Number" if given a numeric value', function() {
    assert.strictEqual(type(4), 'Number');
  });

  it('"Number" if given the NaN value', function() {
    assert.strictEqual(type(NaN), 'Number');
  });

  it('"String" if given a String literal', function() {
    assert.strictEqual(type('Gooooodd Mornning Ramda!!'), 'String');
  });

  it('"String" if given a String object', function() {
    /*jshint -W053 */
    assert.strictEqual(type(new String('I am a String object')), 'String');
  });

  it('"Null" if given the null value', function() {
    assert.strictEqual(type(null), 'Null');
  });

  it('"Undefined" if given the undefined value', function() {
    assert.strictEqual(type(undefined), 'Undefined');
  });
});

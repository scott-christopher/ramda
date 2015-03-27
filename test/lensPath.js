var assert = require('assert');

var R = require('..');


describe('lensPath', function() {
  it('takes a string path and an object and returns a lens focused at the path', function() {
    var obj = {a: {b: {c: 100}}};
    var lens = R.lensPath(['a', 'b', 'c']);
    assert.strictEqual(lens(obj), 100);
    assert.deepEqual(lens.set(1, obj), {a: {b: {c: 1}}});
  });

  it('takes a numeric path and an array and returns a lens focused at the path', function() {
    var arr = [[[0], [1]], [[2], [3]], [[4], [5]]];
    var lens = R.lensPath([2, 1, 0]);
    assert.strictEqual(lens(arr), 5);
    assert.deepEqual(lens.set(10, arr), [[[0], [1]], [[2], [3]], [[4], [10]]]);
  });

  it('takes a mix of string and numeric path segments and returns a lens at the path', function() {
    var mix = {a: [{b: 0}, {c: 1}]};
    var lens = R.lensPath(['a', 1, 'c']);
    assert.strictEqual(lens(mix), 1);
    assert.deepEqual(lens.set(10, mix), {a: [{b: 0}, {c: 10}]});
  });
});

/* jshint typed: true */

var assert = require('assert');

var eqDeep = requireR('eqDeep');

describe('eqDeep', function() {
  var a = [];
  var b = a;
  it('tests for deep equality of its operands', function() {
    assert.strictEqual(eqDeep(100, 100), true);
    assert.strictEqual(eqDeep(100, '100'), false);
    assert.strictEqual(eqDeep([], []), true);
    assert.strictEqual(eqDeep(a, b), true);
  });

  it('handles objects', function() {
    assert.strictEqual(eqDeep({}, {}), true);
    assert.strictEqual(eqDeep({a:1, b:2}, {a:1, b:2}), true);
    assert.strictEqual(eqDeep({a:2, b:3}, {b:3, a:2}), true);
    assert.strictEqual(eqDeep({a:2, b:3}, {a:3, b:3}), false);
    assert.strictEqual(eqDeep({a:2, b:3, c:1}, {a:2, b:3}), false);
  });

  var supportsSticky = false;
  try { RegExp('', 'y'); supportsSticky = true; } catch (e) {}

  var supportsUnicode = false;
  try { RegExp('', 'u'); supportsUnicode = true; } catch (e) {}

  it('handles regex', function() {
    assert.strictEqual(eqDeep(/\s/, /\s/), true);
    assert.strictEqual(eqDeep(/\s/, /\d/), false);
    assert.strictEqual(eqDeep(/a/gi, /a/ig), true);
    assert.strictEqual(eqDeep(/a/mgi, /a/img), true);
    assert.strictEqual(eqDeep(/a/gi, /a/i), false);

    if (supportsSticky) {
      // assert.strictEqual(eqDeep(/\s/y, /\s/y), true);
      // assert.strictEqual(eqDeep(/a/mygi, /a/imgy), true);
    }

    if (supportsUnicode) {
      // assert.strictEqual(eqDeep(/\s/u, /\s/u), true);
      // assert.strictEqual(eqDeep(/a/mugi, /a/imgu), true);
    }
  });

  var listA = [1, 2, 3];
  var listB = [1, 3, 2];
  it('handles lists', function() {
    assert.strictEqual(eqDeep([], {}), false);
    assert.strictEqual(eqDeep(listA, listB), false);
  });

  var c = {}; c.v = c;
  var d = {}; d.v = d;
  var e = []; e.push(e);
  var f = []; f.push(f);
  var nestA = {a:[1, 2, {c:1}], b:1};
  var nestB = {a:[1, 2, {c:1}], b:1};
  var nestC = {a:[1, 2, {c:2}], b:1};
  it('handles recursive data structures', function() {
    assert.strictEqual(eqDeep(c, d), true);
    assert.strictEqual(eqDeep(e, f), true);
    assert.strictEqual(eqDeep(nestA, nestB), true);
    assert.strictEqual(eqDeep(nestA, nestC), false);
  });

  var date1 = new Date(0);
  var date2 = new Date(0);
  var date3 = new Date(1);
  var date4 = new Date(0);
  date4.v = 'value';
  it('handles dates', function() {
    assert.strictEqual(eqDeep(date1, date2), true);
    assert.strictEqual(eqDeep(date2, date3), false);
    assert.strictEqual(eqDeep(date1, date4), false);
  });

  if (typeof ArrayBuffer !== 'undefined' && typeof Int8Array !== 'undefined') {
    var typArr1 = new ArrayBuffer(10);
    typArr1[0] = 1;
    var typArr2 = new ArrayBuffer(10);
    typArr2[0] = 1;
    var typArr3 = new ArrayBuffer(10);
    var intTypArr = new Int8Array(typArr1);
    typArr3[0] = 0;
    it('handles typed arrays', function() {
      assert.strictEqual(eqDeep(typArr1, typArr2), true);
      assert.strictEqual(eqDeep(typArr1, typArr3), false);
      assert.strictEqual(eqDeep(typArr1, intTypArr), false);
    });
  }

  it('is curried', function() {
    var isA = eqDeep(a);
    assert.strictEqual(isA([]), true);
  });
});

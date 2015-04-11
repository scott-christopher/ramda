var assert = require('assert');

var indexOf = requireR('indexOf');
var map = requireR('map');
var repeat = requireR('repeat');
var values = requireR('values');
var valuesIn = requireR('valuesIn');


describe('valuesIn', function() {
  var obj = {a: 100, b: [1, 2, 3], c: {x: 200, y: 300}, d: 'D', e: null, f: undefined};
  function C() { this.a = 100; this.b = 200; }
  C.prototype.x = function() { return 'x'; };
  C.prototype.y = 'y';
  var cobj = new C();

  it("returns an array of the given object's values", function() {
    var vs = valuesIn(obj);
    assert.strictEqual(vs.length, 6);
    assert.strictEqual(indexOf(100, vs) >= 0, true);
    assert.strictEqual(indexOf('D', vs) >= 0, true);
    assert.strictEqual(indexOf(null, vs) >= 0, true);
    assert.strictEqual(indexOf(undefined, vs) >= 0, true);
    assert.strictEqual(indexOf(obj.b, vs) >= 0, true);
    assert.strictEqual(indexOf(obj.c, vs) >= 0, true);
  });

  it("includes the given object's prototype properties", function() {
    var vs = valuesIn(cobj);
    assert.strictEqual(vs.length, 4);
    assert.strictEqual(indexOf(100, vs) >= 0, true);
    assert.strictEqual(indexOf(200, vs) >= 0, true);
    assert.strictEqual(indexOf(cobj.x, vs) >= 0, true);
    assert.strictEqual(indexOf('y', vs) >= 0, true);
  });

  it('works for primitives', function() {
    var result = map(function(val) {
      return values(val);
    }, [null, undefined, 55, '', true, false, NaN, Infinity, , []]);
    assert.deepEqual(result, repeat([], 10));
  });
});

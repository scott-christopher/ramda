var assert = require('assert');
var Maybe = require('../shared/Maybe');

var commuteMap = requireR('commuteMap');
var map = requireR('map');
var of = requireR('of');


var as = [[1], [3, 4]];
var bs = [[1, 2], [3]];
var cs = [[1, 2], [3, 4]];


describe('commuteMap', function() {
  var plus10map = map(function(x) { return x + 10; });
  it('"pivots" a list (list of functors => functor of a list) and applies a transformation', function() {
    assert.deepEqual(commuteMap(plus10map, of, as), [[11, 13], [11, 14]]);
    assert.deepEqual(commuteMap(plus10map, of, bs), [[11, 13], [12, 13]]);
    assert.deepEqual(commuteMap(plus10map, of, cs), [[11, 13], [12, 13], [11, 14], [12, 14]]);
  });

  it('works on Algebraic Data Types such as "Maybe"', function() {
    assert.deepEqual(commuteMap(plus10map, Maybe, [Maybe(3), Maybe(4), Maybe(5)]), Maybe([13, 14, 15]));
  });

  it('is curried', function() {
    var cmtPlus10 = commuteMap(plus10map);
    assert.strictEqual(typeof cmtPlus10, 'function');

    var cmtmArr = cmtPlus10(of);
    assert.strictEqual(typeof cmtmArr, 'function');
    assert.deepEqual(cmtmArr(as), [[11, 13], [11, 14]]);
    assert.deepEqual(cmtmArr(bs), [[11, 13], [12, 13]]);
    assert.deepEqual(cmtmArr(cs), [[11, 13], [12, 13], [11, 14], [12, 14]]);
  });
});

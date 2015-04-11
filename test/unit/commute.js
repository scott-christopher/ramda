var assert = require('assert');
var Maybe = require('../shared/Maybe');

var commute = requireR('commute');
var of = requireR('of');


var as = [[1], [3, 4]];
var bs = [[1, 2], [3]];
var cs = [[1, 2], [3, 4]];


describe('commute', function() {
  it('"pivots" a list (list of functors => functor of a list)', function() {
    assert.deepEqual(commute(of, as), [[1, 3], [1, 4]]);
    assert.deepEqual(commute(of, bs), [[1, 3], [2, 3]]);
    assert.deepEqual(commute(of, cs), [[1, 3], [2, 3], [1, 4], [2, 4]]);
  });

  it('works on Algebraic Data Types such as "Maybe"', function() {
    assert.deepEqual(commute(Maybe.of, [Maybe(3), Maybe(4), Maybe(5)]), Maybe([3, 4, 5]));
  });

  it('is curried', function() {
    var cmtArr = commute(of);
    assert.strictEqual(typeof cmtArr, 'function');
    assert.deepEqual(cmtArr(as), [[1, 3], [1, 4]]);
    assert.deepEqual(cmtArr(bs), [[1, 3], [2, 3]]);
    assert.deepEqual(cmtArr(cs), [[1, 3], [2, 3], [1, 4], [2, 4]]);

  });
});

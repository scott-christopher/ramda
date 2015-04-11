var assert = require('assert');

var composeL = requireR('composeL');
var identity = requireR('identity');
var lens = requireR('lens');
var lensIndex = requireR('lensIndex');
var lensProp = requireR('lensProp');

describe('composeL', function() {

  var identityLens = lens(identity, identity);
  var headLens = lensIndex(0);
  var secondLens = lensIndex(1);
  var xLens = lensProp('x');

  var headOfXLens = composeL(headLens, xLens);
  var xOfHeadLens = composeL(xLens, headLens);
  var secondOfXOfHeadLens = composeL(secondLens, xLens, headLens);

  var objWithList = {x: [1, 2, 3]};
  var listOfObjs = [{x: 4}, {x: 5}, {x: 6}];

  it('composes gets from right to left', function() {
    assert.strictEqual(headOfXLens(objWithList), 1);
    assert.strictEqual(xOfHeadLens(listOfObjs), 4);
  });

  it('composes sets from right to left', function() {
    assert.deepEqual(headOfXLens.set(10, objWithList), {x: [10, 2, 3]});
    assert.deepEqual(xOfHeadLens.set(10, listOfObjs), [{x: 10}, {x: 5}, {x: 6}]);
  });

  it('does not mutate the source when setting', function() {
    assert.deepEqual(headOfXLens.set(10, objWithList), {x: [10, 2, 3]});
    assert.deepEqual(objWithList, {x: [1, 2, 3]});
  });

  it('can compose multiple lenses', function() {
    var source = [{x: [0, 1], y: [2, 3]}, {x: [4, 5], y: [6, 7]}];
    assert.strictEqual(secondOfXOfHeadLens(source), 1);
    assert.deepEqual(secondOfXOfHeadLens.set(8, source), [{x: [0, 8], y: [2, 3]}, {x: [4, 5], y: [6, 7]}]);
    assert.deepEqual(source, [{x: [0, 1], y: [2, 3]}, {x: [4, 5], y: [6, 7]}]);
  });

  it('satisfies left identity', function() {
    var xIdentityLens = composeL(xLens, identityLens);
    assert.deepEqual(xIdentityLens(objWithList), xLens(objWithList));
    assert.deepEqual(xIdentityLens.set(1, objWithList), xLens.set(1, objWithList));
  });

  it('satisfies right identity', function() {
    var identityXLens = composeL(identityLens, xLens);
    assert.deepEqual(identityXLens(objWithList), xLens(objWithList));
    assert.deepEqual(identityXLens.set(1, objWithList), xLens.set(1, objWithList));
  });

  it('satisfies associativity', function() {
    var source = [{x: [0, 1], y: [2, 3]}, {x: [4, 5], y: [6, 7]}];
    var l1 = composeL(secondLens, composeL(xLens, headLens));
    var l2 = composeL(composeL(secondLens, xLens), headLens);

    assert.strictEqual(l1(source), 1);
    assert.deepEqual(l1.set(8, source), [{x: [0, 8], y: [2, 3]}, {x: [4, 5], y: [6, 7]}]);

    assert.strictEqual(l2(source), 1);
    assert.deepEqual(l2.set(8, source), [{x: [0, 8], y: [2, 3]}, {x: [4, 5], y: [6, 7]}]);
  });

});

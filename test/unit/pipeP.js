var assert = require('assert');

var Q = require('q');

var pipeP = requireR('pipeP');


describe('pipeP', function() {
  function a(x) {return x + 'A';}
  function b(x) {return x + 'B';}

  it('handles promises', function() {
    var plusOne = function(a) {return a + 1;};
    var multAsync = function(a, b) {return Q.when(a * b);};
    return pipeP(multAsync, plusOne)(2, 3)
      .then(function(result) {
        assert.strictEqual(result, 7);
      });
  });

  it('returns a function with arity == leftmost argument', function() {
    function a2(x, y) { void y; return 'A2'; }
    function a3(x, y) { void y; return Q.when('A2'); }
    function a4(x, y) { void y; return 'A2'; }

    var f1 = pipeP(a, b);
    assert.strictEqual(f1.length, a.length);
    var f2 = pipeP(a2, b);
    assert.strictEqual(f2.length, a2.length);
    var f3 = pipeP(a3, b);
    assert.strictEqual(f3.length, a3.length);
    var f4 = pipeP(a4, b);
    assert.strictEqual(f4.length, a4.length);
  });
});

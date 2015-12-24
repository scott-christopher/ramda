module.exports = function _fnName(fn) {
  if (fn.name !== void 0) {
    return fn.name;
  } else {
    // Legacy support for IE and friends
    var matches = /function\s+([^(\s]{1,})/.exec(fn.toString());
    return matches !== null && matches.length >= 2 ? matches[1] : '';
  }
};

module.exports = function _setFnName(name, fn) {
  var desc = Object.getOwnPropertyDescriptor(fn, 'name');
  desc.value = name;
  Object.defineProperty(fn, 'name', desc);
  return fn;
};

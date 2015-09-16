module.exports = function Identity(x) {
  return {
    value: x,
    map: function(f) { return Identity(f(x)); }
  };
};

module.exports = function Const(x) {
  return {
    value: x,
    map: function() { return this; }
  };
};

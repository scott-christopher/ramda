(typeof global != "undefined" ? global : window).requireR = function(module) {
  return (process && process.env.TEST_DIST)
    ? require('../../dist/ramda')[module]
    : require('../../src/' + module);
};

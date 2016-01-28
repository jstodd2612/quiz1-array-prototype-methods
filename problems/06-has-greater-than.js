'use strict';

module.exports = function hasGreaterThan(numArray, max) {
  return numArray.some(function(arr) {
    return arr > max;
  });
};

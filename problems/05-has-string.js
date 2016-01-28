'use strict';

module.exports = function hasString(inputArray) {
  return inputArray.some(function(arr) {
    return typeof(arr) === 'string';
  });
};

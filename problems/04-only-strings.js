'use strict';

module.exports = function onlyStrings(inputArray) {
  return inputArray.filter(function(arr) {
    return typeof(arr) === 'string';
  });
};

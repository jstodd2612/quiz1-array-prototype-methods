'use strict';

module.exports = function concatEach(strArray, prefix) {
  return strArray.map(function(arr){
    return prefix + arr;
  });
};

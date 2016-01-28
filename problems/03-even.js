'use strict';

module.exports = function even(numArray) {
  return numArray.filter(function(arr){
    return !(arr % 2);
  });
};

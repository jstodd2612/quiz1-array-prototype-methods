'use strict';

module.exports = function sum(numArray) {
  if(numArray.length == 0){return 0;}
  return numArray.reduce(function(prev, curr) {
    if(typeof curr == "number"){
      return prev + curr;
    }
    return prev;
  });
};

'use strict';

module.exports = function highest(numArray) {
  if(numArray.length == 0){return null;}
  return numArray.reduce(function(prev, curr) {
    if(typeof curr == "number" && curr > prev){
      return curr;
    }
    return prev;
  });
};

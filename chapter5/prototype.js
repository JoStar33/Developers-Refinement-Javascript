const numbers = [1, 2, 3, 4, 5];

Array.prototype.filterMap = function (callbackFilter, callbackMap) {
  const arr = [];
  for(const value of this) {
    if(callbackFilter(value)) {
      arr.push(callbackMap(value));
    }
  }
  return arr;
}

console.log(numbers.filterMap((arr) => {  
if(arr > 3) 
  return arr;
}, (arr) => {
  if(arr > 4)
    return arr * 4;
  return arr;
}));
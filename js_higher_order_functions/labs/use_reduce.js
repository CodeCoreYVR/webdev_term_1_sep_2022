const array = [2, 4, 6, 8, '10', '5', 25, [], 'rabbit', '1', 1];

const reducer = (cT, cV) => { // cT as in currentTotal, cV as in currentValue
  if(Number(cV) === cV) {
    return cV + cT;
  } else {
    return cT;
  }
}
console.log('******************** Lab Ask For This ********************')
console.log(array.reduce((currentTotal, currentValue) => reducer(currentTotal, currentValue)))
// or 
// console.log(array.reduce((cT, cV) => reducer(cT, cV)))
console.log('************************* Or This ************************')


Array.prototype.reduce2 = function(fn) { // fn as in a callback function(fn)
  let currentTotal = 0;
  
  for (let i = 0; i < this.length; i++) {
    // call the callback function(fn) here and add currentValue to currentTotal
    const resultOfFunction = fn(currentTotal, this[i]);
    if (resultOfFunction) {
      currentTotal = resultOfFunction;
    }
  }
  return currentTotal;
}

console.log(array.reduce2(reducer))
console.log('*************************** End ***************************')



// [Lab] Use Reduce
// Opened: Saturday, 19 February 2022, 12:00 AM
// Due: Saturday, 26 February 2022, 12:00 AM

// The reduce() method executes a reducer function (that you provide) 
// on each element of the array, resulting in a single output value.

// Using Array.reduce create a value that adds all the numbers from 
// the following array

// const array = [2, 4, 6, 8, '10', '5', 25, [], 'rabbit', '1', 1];
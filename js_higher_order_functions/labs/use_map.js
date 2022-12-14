const array = ['a', '1', 5, 55, 8, 'apple', '25']

const onlyStrings = e => { // e as in element
  if (typeof(e) === 'string') {
    return e
  }
}
const onlyNumbers = e => { // e as in element
  if (typeof(e) === 'number') {
    return e
  } else {
    return false
  }
}
const repeatedByIndex = (e, i) => { // e as in element, i as in index
  return `${e}`.repeat(i);
}
const doubledIfNumber = e => { // e as in element
  if (Number(e) === e) {
    return e * 2;
  } else {
    return e;
  }
}
console.log('******************** Labs Ask For This ********************')
console.log(array.map(element => {return onlyStrings(element)})) 
// or 
// console.log(array.map(e => onlyStrings(e)))

console.log(array.map(element => {return onlyNumbers(element)})) 
// or 
// console.log(array.map(e => onlyNumbers(e)))

console.log(array.map((element, index) => {return repeatedByIndex(element, index)})) 
// or 
// console.log(array.map((e,i) => repeatedByIndex(e,i)))

console.log(array.map(element => {return doubledIfNumber(element)})) 
// or 
// console.log(array.map(element => doubledIfNumber(e)))
console.log('************************* Or This *************************')


Array.prototype.map2 = function(fn) { // fn as in a callback function(fn)
  const result = [];

  for (let i = 0; i < this.length; i++) {
    const element = this[i];
    // call the fn here and check if the return of the callback 
    // function is true, false or undefined. 
    const resultOfFunction = fn(element, i);
    if (resultOfFunction || resultOfFunction === false || resultOfFunction === undefined) {
      result.push(resultOfFunction)
    }
  }
  return result;
}

console.log(array.map2(onlyStrings))
console.log(array.map2(onlyNumbers))
console.log(array.map2(repeatedByIndex))
console.log(array.map2(doubledIfNumber))
console.log('*************************** End ***************************')




// [Lab] Use Map
// Opened: Saturday, 19 February 2022, 12:00 AM
// Due: Saturday, 26 February 2022, 12:00 AM

// Using Array.map create a new array that is the following with the 
// provided array: const array = ['a', '1', 5, 55, 8, 'apple', '25'];

// 1) Only strings ['a', '1', undefined, undefined, undefined, 'apple', '25']
// 2) Only numbers (type exclusive) [false, false, 5, 55, 8, false, false]
// 3) Repeated by index
// 4) Doubled if it is a number, itself otherwise

// Map reference https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
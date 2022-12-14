const array = ['a', '1', 55, 5, 8, 'apple', 25, 5, 25]

const onlyStrings = e => { // e as in element
  if (typeof(e) === 'string') {
    return e;
  }
}
const greaterThan3 = e => { // e as in element
  if(e > 3) {
    return e;
  }
}
const lengthGreaterThan3 = e => { // e as in element
if (e.length > 3) {
  return e;
}
}
const duplicatedElements = (e, i, a) => { // e as in element, i as in index, a as in array
  if (a.indexOf(e) !== i) {
    return e
  }
}

console.log('******************** Labs Ask For This ********************')
console.log(array.filter(element => onlyStrings(element))) // or array.filter(e => onlyStrings(e))
console.log(array.filter(element => greaterThan3(element))) // or array.filter(e => greaterThan3(e))
console.log(array.filter(element => lengthGreaterThan3(element))) // or array.filter(e => lengthGreaterThan3(e))
console.log(array.filter((element, index, array) => duplicatedElements(element, index, array))) // or array.filter((e,i,a) => duplicatedElements(e,i,a))
console.log('************************* Or This *************************')


Array.prototype.filter2 = function(fn) { // fn as in a callback function(fn)
  const result = [];

  for (let i = 0; i < this.length; i++) {
    const element = this[i];
    // call the fn here and check if the return of the callback function is true
    const resultOfFunction = fn(element, i, this);
    if (resultOfFunction) {
      result.push(resultOfFunction);
    }
  }
  return result;
}
// ************* Same As Above Prototype But A Little Harder To Understand *************
// Array.prototype.filter2 = function(fn) {
// 	let result = [];
  
// 	for (let i = 0; i < this.length; i++) {
// 		if (fn(this[i], i, this)) {
// 			result.push(this[i]);
// 		}
// 	}
// 	return result
// }
// *************************************************************************************

console.log(array.filter2(onlyStrings))
console.log(array.filter2(greaterThan3))
console.log(array.filter2(lengthGreaterThan3))
console.log(array.filter2(duplicatedElements))
console.log('*************************** End ***************************')




// [Lab] Use Filter
// Opened: Saturday, 19 February 2022, 12:00 AM
// Due: Saturday, 26 February 2022, 12:00 AM

// The filter() method creates a new array with all elements that 
// pass the test implemented by the provided function.

// Using Array.filter create a new array that is the following with 
// the provided array:

// const array = ['a', '1', 55, 5, 8, 'apple', 25];
// 1) Only strings
// 2) greater than 3
// 3) length is greater than 3
// 4) Duplicated elements

// Filter Reference https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
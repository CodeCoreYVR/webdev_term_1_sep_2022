const array = [1, 2, 6, 'a', '7', 3, 4, 4, 2];

const greaterThan3 = e => {return e > 3 }; // e as in element
const divisibleBy3 = e => {return e % 3 === 0} // e as in element
const firstString = e => {return typeof(e) === 'string'} // e as in element
const duplicated = (e, i) => {return array.indexOf(e) !== i} // e asi in element, i as in index

console.log('******************** Labs Ask For This ********************')
console.log(array.find(element => greaterThan3(element))) // or array.find(e => greaterThan3(e))
console.log(array.find(element => divisibleBy3(element))) // or array.find(e => divisibleBy3(e))
console.log(array.find(element => firstString(element))) // or array.find(e => firstString(e))
console.log(array.find((element, index) => duplicated(element, index))) // or array.find((e, i) => duplicated(e, i))
console.log('************************* Or This *************************')



Array.prototype.find2 = function(fn) { // fn as in a callback function(fn)
  for (let i = 0; i < this.length; i++) {
    const element = this[i];
    // call the fn here and check if the return of the callback function is true
    const resultOfFunction = fn(element, i, this);
    if (resultOfFunction) {
      return this[i];
    }
  }
}

console.log(array.find2(greaterThan3))
console.log(array.find2(divisibleBy3))
console.log(array.find2(firstString))
console.log(array.find2(duplicated))
console.log('*************************** End ***************************')



// [Lab] Use Find
// Opened: Saturday, 19 February 2022, 12:00 AM
// Due: Saturday, 26 February 2022, 12:00 AM

// Use `Array.find` to get the following from the provided array:

// const array = [1, 2, 6, 'a', '7', 3, 4, 4, 2];
// 1) First element greater than 3
// 2) First element divisible by 3
// 3) First string
// 4) First duplicated element

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
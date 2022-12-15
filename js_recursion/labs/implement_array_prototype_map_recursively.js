const numbers = [1, 2, 3, 4, 5, 6]
const names = ["Cersei", "Jon", "Arya"];

let even = function(n){
  return n % 2 === 0;
}
let pow2 = function(n){
  return n * n;
}

const map = (array, fn, newArray = []) => {
  if (array.length <= 0){
    return newArray;
    // in deepest level of recursion array will have 0 length
    // return emptry newArray;
  } else {
    const [itemToRemoveFromArray, ...theRestOfArray] = array;
    // kind of like Array.slice(1) except you're saying what you
    // want first item in array to be called and what everything
    // after that should be called.
    const tempArray = [...newArray, fn(itemToRemoveFromArray)];
    // kind of like newArray.push(fn(item)) except you're creating 
    // a new instance of an array. taking every value in newArray
    // and spreading it out plus adding result of fn(item).
    return map(theRestOfArray, fn, tempArray);
    // each levelof recursion we pull out of returns the results
    // with one less value to array and one more value to newArray
  }
}

console.log(map(numbers, even)); // [false, true, false, true, false, true]
// console.log(map(numbers, n => n.toString().repeatNo)); // ['1', '22', '333', '4444', '55555', '666666']
// above(line 31) won't work as .repeatNo isn't a method
console.log(map(numbers, pow2)); // [1, 4, 9, 16, 25, 36]
console.log(map(names, name => `Hi, ${name}!`)); // ['Hi, Cersei!', 'Hi, Jon!', 'Hi, Arya!']




// [Lab] Implement Array.prototype.map() recursively
// Opened: Saturday, 22 January 2022, 12:00 AM
// Due: Saturday, 29 January 2022, 12:00 AM

// Write the higher-order function, `map`, as seen in class using **recursion**
// instead. Unlike the iterative version, you are not required to pass the index to
// the callback.

// `map` takes 2 arguments in order:
// - An array
// - A callback that will be called once for every element in the array with 1
//   argument: the current value of the element

// Usage examples:

// const even = n % 2 === 0;
// const pow2 = n => n ** 2;
// const numbers = [1, 2, 3, 4, 5, 6];
// const names = ["Cersei", "Jon", "Arya"];

// map(numbers, even); // [false, true, false, true, false, true]
// map(numbers, n => n.toString().repeatNo); // ['1', '22', '333', '4444', '55555', '666666']
// map(numbers, pow2); // [1, 4, 9, 16, 25, 36]
// map(names, name => `Hi, ${name}!`); // ['Hi, Cersei!', 'Hi, Jon!', 'Hi, Arya!']
const objectify = function(arr) {
  let obj = {};
  for (index in arr) {
    obj[`${arr[index][0]}`] = arr[index][1];
  }
  return obj;
}

console.log(objectify([
    ['a', 1],
    ['b', 2],
    ['c', 3]
])) // {'a': 1, 'b': 2, 'c': 3}

console.log(objectify([
    ['key', 12],
    ['another key', 47],
    ['yet a third key', 88]
])) // {'key': 12, 'another key': 47, 'yet a third key': 88}

console.log(objectify([
    ['S', "O"],
    ['P', "W"],
    ['A', "L"],
    ['C', "S"],
    ['E', "S"],
])) // {'S': "O", 'P': "W", 'A': "L", 'C' : "S", 'E' : "S"}



// [Lab] Object From Array
// Opened: Thursday, 24 February 2022, 12:00 AM
// Due: Thursday, 3 March 2022, 12:00 AM

// // Specs /** Write a function 'objectify' which takes a two-dimensional 
// // array and converts those lower-level elements into key values pairs in an 
// // object. The lower level arrays will always be of size 2. */

// // Test Cases const l = console.log

// l(objectify([
//     ['a', 1],
//     ['b', 2],
//     ['c', 3]
// ])) // {'a': 1, 'b': 2, 'c': 3}

// l(objectify([
//     ['key', 12],
//     ['another key', 47],
//     ['yet a third key', 88]
// ])) // {'key': 12, 'another key': 47, 'yet a third key': 88}

// l(objectify([
//     ['S', "O"],
//     ['P', "W"],
//     ['A', "L"],
//     ['C', "S"],
//     ['E', "S"],
// ])) // {'S': "O", 'P': "W", 'A': "L", 'C' : "S", 'E' : "S"}
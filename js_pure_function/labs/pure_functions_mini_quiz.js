console.log('Math.random(): ',Math.random()); // Returns ~> 0.688776099580936
console.log('Math.random(): ',Math.random()); // Returns ~> 0.9953022222043633
console.log('Math.random(): ',Math.random()); // Returns ~> 0.34174288524775753
console.log(Math.random() == Math.random()); // Returns ~> false
// Answer: Math.rondom is an "inpure" function
// ------------------------------------------------------
console.log('Math.floor(5.3333)', Math.floor(5.3333)); // Returns ~> 5
console.log('Math.floor(5.3333)', Math.floor(5.3333)); // Returns ~> 5
console.log(Math.floor(5.3333) == Math.floor(5.3333)); // Returns ~> true

console.log('Math.floor(5.8999)', Math.floor(5.8999)); // Returns ~> 5
console.log('Math.floor(5.8999)', Math.floor(5.8999)); // Returns ~> 5
console.log(Math.floor(5.8999) == Math.floor(5.8999)); // Returns ~> true

console.log('Math.floor(8.3333)', Math.floor(8.3333)); // Returns ~> 8
console.log('Math.floor(8.3333)', Math.floor(8.3333)); // Returns ~> 8
console.log(Math.floor(8.3333) == Math.floor(8.3333)); // Returns ~> true
// Answer: Math.floor() is a "pure" function
// ------------------------------------------------------
const arr = [1,2,3,4,5,6];
function getLast(arr) {
return arr.pop();
}

// -------------------- Run Examples --------------------
// console.log(arr[5] == getLast(arr)); // Returns ~> ture
// console.log(arr[5] == getLast(arr)); // Returns ~> false
// console.log(getLast(arr) == arr[3]); // Returns ~> false
// ------------ Run Separately From Examples ------------
console.log('getLast(arr)', getLast(arr)); // Returns ~> 6
console.log('getLast(arr)', getLast(arr)); // Returns ~> 5
console.log('getLast(arr)', getLast(arr)); // Returns ~> 4
console.log('arr', arr); // Returns ~> [1,2,3]
console.log(getLast(arr) == getLast(arr)); // Returns ~> false
// Answer: getLast() is an "inpure" function
// ------------------------------------------------------
const GLOBAL_VARIABLE = 4

function multiplyByGlobal(x) {
return x * GLOBAL_VARIABLE;
}

console.log('multiplyByGlobal(3)', multiplyByGlobal(3)); // Return ~> 12
console.log('multiplyByGlobal(3)', multiplyByGlobal(3)); // Return ~> 12
console.log('multiplyByGlobal(3)', multiplyByGlobal(3)); // Return ~> 12
console.log('GLOBAL_VARIABLE', GLOBAL_VARIABLE); // Return ~> 4
console.log(multiplyByGlobal(3) == multiplyByGlobal(3)); //  Returns ~> true
// Answer: multiplyByGlobal() is a "pure" function
// ------------------------------------------------------



// // [Lab] Pure Functions Mini Quiz

// // Given this environment and list of console.logs determine wether the function being called is pure or not.

// console.log('Math.random(): ',Math.random());
// console.log('Math.random(): ',Math.random());
// console.log('Math.random(): ',Math.random());

// console.log('Math.floor(5.3333)', Math.floor(5.3333));
// console.log('Math.floor(5.3333)', Math.floor(5.3333));

// console.log('Math.floor(5.8999)', Math.floor(5.8999));
// console.log('Math.floor(5.8999)', Math.floor(5.8999));

// console.log('Math.floor(8.3333)', Math.floor(8.3333));
// console.log('Math.floor(8.3333)', Math.floor(8.3333));

// const arr = [1,2,3,4,5,6];
// function getLast(arr) {
// return arr.pop();
// }

// console.log('getLast(arr)', getLast(arr));
// console.log('getLast(arr)', getLast(arr));
// console.log('getLast(arr)', getLast(arr));

// const GLOBAL_VARIABLE = 4

// function multiplyByGlobal(x) {
// return x * GLOBAL_VARIABLE;
// }

// console.log('multiplyByGlobal(3)', multiplyByGlobal(3));
// console.log('multiplyByGlobal(3)', multiplyByGlobal(3));
// console.log('multiplyByGlobal(3)', multiplyByGlobal(3));
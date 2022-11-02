let arg1 = process.argv[2];
let arg2 = process.argv[3];

arg1 = (Number(arg1) == arg1) ? Number(arg1) : arg1;
arg2 = (Number(arg2) == arg2) ? Number(arg2) : arg2;

let greaterThan = (arg1 > arg2) ? true : false;
console.log(greaterThan)
// ----------------------------- or -----------------------------
console.log('----------------- or -----------------')

let arg1IsNum = Number(arg1) != arg1;
let arg2IsNum = Number(arg2) != arg2;

if (arg1 && arg2) {
  if (arg1IsNum && arg2IsNum) {
    console.log(`${arg1} and ${arg2} are not numbers!`)
  } else if (arg1IsNum) {
    console.log(`${arg1} is not a number! `)
  } else if (arg2IsNum) {
    console.log(`${arg2} is not a number! `)
  } else {
    let greaterThan = (arg1 > arg2) ? true : false;
    console.log(greaterThan)
  }
} else {
  console.log('Incorrect input. Please try something like:\n$ node greaterThan.js 10 3')
}
// --------------------------- stretch --------------------------
console.log('--------------- stretch --------------')

let x = process.argv[2];
let y = process.argv[3];

x = (Number(x) == x) ? Number(x) : x;
y = (Number(y) == y) ? Number(y) : y;

if (x > y) {
  console.log(`${x} is greater than ${y}`)
} else if (x < y) {
  console.log(`${y} is greater than ${x}`)
} else {
  console.log(`${x} is equal to ${y}`)
}
// ----------------------------- or -----------------------------
console.log('----------------- or -----------------')

let xIsNum = Number(x) != x;
let yIsNum = Number(y) != y;

if (x && y) {
  if (xIsNum && yIsNum) {
    console.log(`${x} and ${y} are not numbers!`)
  } else if (xIsNum) {
    console.log(`${x} is not a number! `)
  } else if (yIsNum) {
    console.log(`${y} is not a number! `)
  } else {
    if (x > y) {
      console.log(`${x} is greater than ${y}`)
    } else if (x < y) {
      console.log(`${y} is greater than ${x}`)
    } else {
      console.log(`${x} is equal to ${y}`)
    }
  }
} else {
  console.log('Incorrect input. Please try something like:\n$ node hasRemainder.js 10 3')
}
// ----------------------------- end ----------------------------


// [Lab] greaterThan
// Opens: Wednesday, 9 November 2022, 12:00 AM

// Create a script greaterThan.js which takes in 2 numbers as 
// arguments.

// It will print true if the first number is greater than the 
// second number and false if it's not.
  
//   $ node greaterThan.js 1 2 >> Returns >> false

//   $ node greaterThan.js 1 1 >> Returns >> false

//   $ node greaterThan.js 2 1 >> Returns >> true

// Stretch

// Make the script print out a string "X is greater than Y" where X 
// is the first argument and Y is the second argument.

// If X and Y are equal it should print out "X is equal to Y".
  
//   $ node greaterThan.js 4 7 >> Returns >> 7 is greater than 4

//   $ node greaterThan.js 8 1 >> Returns >> 8 is greater than 1

//   $ node greaterThan.js 5 5 >> Returns >> 5 is equal to 5


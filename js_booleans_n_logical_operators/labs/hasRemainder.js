const x = process.argv[2];
const y = process.argv[3];

// --------------------------------------------------------------
if (x % y == 0) {
  console.log(`${x} divided by ${y} has no remainder`)
} else {
  console.log(`${x} divided by ${y} has remainder ${x % y}`)
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
    if (x % y == 0) {
      console.log(`${x} divided by ${y} has no remainder`)
    } else {
      console.log(`${x} divided by ${y} has remainder ${x % y}`)
    }
  }
} else {
  console.log('Incorrect input. Please try something like:\n$ node hasRemainder.js 10 3')
}


// [Lab] hasRemainder
// Opens: Wednesday, 9 November 2022, 12:00 AM

// Create a script hasRemainder.js which takes in two numbers as arguments: X and Y.

// If X divided by Y has a remainder it will print out
// "X divided by Y has remainder"

// If X divided by Y has no remainder it will print out
// "X divided by Y has no remainder"

//   $ node hasRemainder.js 5 5 >> Returns >> 5 divided by 5 has no remainder

//   $ node hasRemainder 10 9 >> Returns >> 10 divided by 9 has remainder 1


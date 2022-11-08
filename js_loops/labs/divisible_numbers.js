const prompt = require('prompt-sync')();
let arg1 = process.argv[2] ? process.argv[2] : prompt("please enter a number!");
let arg2 = process.argv[3] ? process.argv[3] : prompt("please enter another number!");


if (!arg1 || !arg2 || Number(arg1) != arg1 || Number(arg2) != arg2) {
  console.log('Expected two numbers!')
} else {
  for (let i = 1; i <= arg1; i++) {
    if (i % arg2 == 0) {
      console.log(i)
    }
  } 
}





// [Lab] Divisible Numbers
// Opens: Thursday, 10 November 2022, 12:00 AM

// Create a script that accepts two numbers as arguments, x and y. It should 
// print all numbers between 1 and x that are cleanly divisible by y.

// If arguments weren't provided to the script it should print out "Expected 
// two numbers".


//   $ node divisibleBy.js 100 5
//   5
//   10
//   15
//   20
//   25
//   ...
//   100


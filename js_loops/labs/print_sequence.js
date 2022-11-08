const prompt = require('prompt-sync')();
let arg = process.argv[2] ? process.argv[2] : prompt("please enter a number!");

let counter = 0;
if (!arg || (Number(arg) != arg)) {
  console.log('Expected a number!')
} else {
  if (arg >= 0) {
    while (arg >= counter) {
      console.log(counter)
      counter++
    }
  } else {
    while (arg <= counter) {
      console.log(counter)
      counter--
    }
  }
}



// [Lab] Print Sequence
// Opens: Thursday, 10 November 2022, 12:00 AM

// Create a script that will take in a number as an argument. It will print 
// the numbers from 0 to the provided number. If a number is not provided 
// it will print out "Expected a number".


//   $ node countTo.js 5
//   0
//   1
//   2
//   3
//   4
//   5

//   $ node countTo.js 2
//   0
//   1
//   2

// Stretch:

// Make your script work with negative values as well.

//   $ node countTo.js -6
//   0
//   -1
//   -2
//   -3
//   -4
//   -5
//   -6

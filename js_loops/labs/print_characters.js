const prompt = require('prompt-sync')();
let arg = process.argv[2] ? process.argv[2] : prompt("please enter a string!");

if (!arg) {
  console.log('Expected something, anything really!')
} else {
  for (let i = 0; i < arg.length; i++) {
    console.log(arg[i])
  }
}




// [Lab] Print Characters
// Opens: Thursday, 10 November 2022, 12:00 AM

// Create a script that accepts a string as an argument.

// It will print out each character of that string.

// If no argument was provided print "Received no argument".

//   $ node charactersOf.js hello
//   h
//   e
//   l
//   l
//   o

//   $ node charactersOf.js 555
//   5
//   5
//   5

//   $ node charactersOf.js
//   Received no argument


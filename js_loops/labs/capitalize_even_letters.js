const prompt = require('prompt-sync')();
let arg = process.argv[2] ? process.argv[2] : prompt("please enter a string!");

if (!arg) {
  console.log('Expected something, anything really!')
} else {
  arg = arg.toLocaleLowerCase();
  for (let i = 0; i < arg.length; i++) {
    (i % 2 === 0) ? console.log(arg[i]) : console.log(arg[i].toUpperCase())
  }
}





// [Lab] Capitalize Even Letters
// Opens: Thursday, 10 November 2022, 12:00 AM

// Write a script capitalizeEvenLetters.js that takes a word as an 
// argument. Upper case every even letter and lower case every odd 
// letter of the word then log it.


//   $ node capitalizeEvenLetters.js fish
//   fIsH

//   $ node capitalizeEvenLetters.js baratheon
//   bArAtHeOn

// Stretch

// Make the script work with a sentence as an argument.


//   $ node capitalizeEvenLetters.js "Hello World"
//   hElLo wOrLd


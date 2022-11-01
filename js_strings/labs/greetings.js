// [Lab] Greetings
// Opens: Wednesday, 9 November 2022, 12:00 AM

// Write a script greeting.js that takes in two names, firstName, secondName, and 
// prints "firstName greets secondName".
  
//   $ node ./greeting.js beauty beast
//   beauty greets beast
  
const prompt = require('prompt-sync')();

const firstName = prompt("What is your name?");
const secondName = prompt ("Who is the other person?");

console.log(`${firstName} greets ${secondName}`);







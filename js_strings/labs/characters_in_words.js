const arg1 = process.argv[2];
const arg2 = process.argv[3];

if (arg1 && !arg2) {
  console.log(arg1.length);
} else if (arg2) {
  let length = arg1.length + arg2.length
  console.log(length);
} else {
  console.log(`Wrong number of arguments. Please type something like:\n$ node characters_in_words.js jon snow`);
}



// [Lab] Characters in Word
// Opens: Wednesday, 9 November 2022, 12:00 AM

// Write a script characterCount.js that takes in a string as an argument and prints 
// the number of characters in the string:
  
//   $ node characterCount.js one >> returns > 3
  
//   $ node characterCount.js pikachu >> returns > 7

// Stretch

// Make the script take two arguments and print out the sum of all characters from 
// both words:
  
//   $ node characterCount.js jon snow >> returns > 7





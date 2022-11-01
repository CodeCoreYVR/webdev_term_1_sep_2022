const arg1 = process.argv[2];
const arg2 = process.argv[3];
let array = ['123','125','126','174'];
let str = '';
let char;

if (!arg1) {
  array.map(value => (str += String.fromCharCode(value)));
  console.log(str);
  return str;
} else if (arg1 && !arg2) {
  char = String.fromCharCode(arg1);
  console.log(char);
  return char;
} else {
  console.log(`Wrong number of arguments. Please type something like:\n$ node character_codes.js 88\nor\n$ node character_codes.js`)
}




// [Lab] Character Codes
// Opens: Wednesday, 9 November 2022, 12:00 AM

// In a script called characterCodes.js, find a way to convert these UTF-16 character codes into values:

// 123, 125, 126, 174

//   $ node characterCodes.js > returns >> {}~®

// You can find a reference to the codes here.

// Stretch

// Update the script to take in a number as an argument and prints out a character with the given character code:

//   $ node characterCode.js 88 > returns >> X




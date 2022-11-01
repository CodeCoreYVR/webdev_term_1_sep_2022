const arg1 = process.argv[2];
const arg2 = process.argv[3];

if (arg1 && !arg2) {
  console.log(arg1.slice(-1));
  return arg1;
} else if (arg2 && (parseInt(arg2) == arg2)) {
  console.log(arg1[arg2]);
  return arg1[arg2];
} else {
  console.log(`Incorrect number of arguments. Please type something like:\n$ node last_character.js hello 1`);
}




// [Lab] Last Character
// Opens: Wednesday, 9 November 2022, 12:00 AM

// Write a script lastCharacter.js that will print out the very last character of the given string:

//   $ node lastCharacter.js hello > returns >> o

// Stretch

// Update the script to take in a number as a second argument. The script will print the character of the string at that given index:

//   $ node lastCharacter.js hello 3 > returns >> l

//   $ node lastCharacter.js hello 2 > returns >> l

//   $ node lastCharacter.js hello 1 > returns >> e





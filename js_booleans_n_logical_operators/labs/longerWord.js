const arg1 = process.argv[2]
const arg2 = process.argv[3]

if (arg1 && arg2) {
  if (arg1.length > arg2.length) {
    console.log(arg1);
    return arg1;
  } else if (arg1.length < arg2.length) {
    console.log(arg2);
    return arg2;
  } else {
    console.log('same length')
  }
} else {
  console.log('Incorrect input. Please try something like:\n$ node longerWord.js hello world')
}


// [Lab] longerWord
// Opens: Wednesday, 9 November 2022, 12:00 AM

// Write a script longerWord.js which accepts two strings. It 
// will print the string which has more characters.

//   $ node longerWord.js hello universe >> Returns >> universe

//   $ node longerWord.js hello world >> Returns >> same length

// If the strings have the same amount of characters then it 
// prints “same length”.



const arg = process.argv[2];

if (Number(arg) == arg) {
  console.log(true)
} else {
  console.log(false)
}
// ----------------------------- or -----------------------------
console.log('----------------- or -----------------')
const argArr = process.argv.slice(2);

const isNumber = argArr => {
  let array = argArr.map(str => (Number(str) == str) ? true : false);
  if (!array[1]) {
    console.log(array[0]);
    return array[0];
  } else {
    console.log(array);
    return array;
  }
}

argArr[0] ? isNumber(argArr) : console.log('Incorrect input. Please try something like:\n$ node isNumber.js 5');
// --------------------- end --------------------

// [Lab] isNumber
// Opens: Wednesday, 9 November 2022, 12:00 AM

// Write a script isNumber.js which takes in an argument. It will return true if 
// the argument is a number or false if it is not.

//   $ node isNumber.js 5 >> Returns > true
//   $ node isNumber.js "hello" >> Returns > false
//   $ node isNumber.js "5" >> Returns > true
//   $ node isNumber.js "banana" >> Returns > false




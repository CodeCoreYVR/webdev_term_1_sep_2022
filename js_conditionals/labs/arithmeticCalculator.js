let argArray = process.argv.slice(2);

let answer;

if (!argArray[0] || !argArray[1] || !argArray[2] || argArray[3]) {
  console.log('Incorrect input! Please try something like:\n$ node arithmeticCalculator.js 5 + 5');
} else if (Number(argArray[0]) == argArray[0] && Number(argArray[2]) == argArray[2]) {
  argArray[0] = Number(argArray[0]);
  argArray[2] = Number(argArray[2]);

  if (argArray[1] === '+') {
    console.log(argArray[0] + argArray[2])
  } else if (argArray[1] === '-') {
    console.log(argArray[0] - argArray[2])
  } else if (argArray[1] === '*') {
    console.log(argArray[0] * argArray[2])
  } else if (argArray[1] === '/') {
    console.log(argArray[0] / argArray[2])
  } else {
    console.log('Only compatable with +,-,* and /');
  }
} else {
  console.log(`${argArray[0]} or ${argArray[2]} not a number!`)
}



// [Lab] Arithmetic Calculator
// Opened: Sunday, 16 October 2022, 12:00 AM

// Write a script that takes in 3 arguments:

//     a number
//     an arithmetic operator + - * /
//     another number

// The script will perform the expression created from the 3 arguments and logs the result. Debugging Tip: console.log the type of inputs to the script.

//   $ node primitiveCalculator.js 1 + 1 >> Returns >> 2
//   $ node primitiveCalculator.js 1 - 1 >> Returns >> 0
//   $ node primitiveCalculator.js 5 * 2 >> Returns >> 10
//   $ node primitiveCalculator.js 5 / 2 >> Returns >> 2.5




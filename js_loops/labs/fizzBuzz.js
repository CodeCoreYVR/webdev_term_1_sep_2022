const prompt = require('prompt-sync')();
let fizz = process.argv[2] ? process.argv[2] : prompt("please enter a number!");
let buzz = process.argv[3] ? process.argv[3] : prompt("please enter another number!");

let counter = 0;
if (!fizz || !buzz || Number(fizz) != fizz || Number(buzz) != buzz) {
  console.log('Expected two numbers!')
} else {
  while (counter <= 100) {
    if (counter % fizz === 0 &&  counter % buzz === 0 && counter != 0) {
      console.log('fizzbuzz')
    } else if (counter % fizz === 0 && counter != 0) {
      console.log('fizz')
    } else if (counter % buzz === 0 && counter != 0) {
      console.log('buzz')
    } else {
      console.log(counter)
    }
    counter++
  }
}





// [Lab] FizzBuzz
// Opens: Thursday, 10 November 2022, 12:00 AM

// Write a script fizzBuzz.js that takes two numbers, then iterates through 
// the numbers from 1 to 100 logging "fizz" if the current number is 
// divisible by the first number, "buzz" if the current number is divisible 
// by the second number, "fizzbuzz" if it's divisible by both, else print 
// the current number.

// Example usage:


//   $ node fizzBuzz.js 3 5
//   1
//   2
//   fizz
//   4
//   buzz
//   fizz
//   7
//   8
//   fizz
//   buzz
//   11
//   fizz
//   13
//   14
//   fizzbuzz
//   16
//   17
//   ...


// Make script take inputs
const prompt = require("prompt-sync")();

// Need five statements
// Statements are if statements taking in inputs, so also need output too.

// One statement for &&
// const a = prompt("Guess the two number's I'm think of. First, guess my first number." )

// const b = prompt("Now, guess my second number." )

// if (a === "1" && b === "2") {
//   console.log("Congrats")
// };

// One statement for ||
// let haveStudyPermit = prompt('Do you have your study permit? (true/false)');
// let haveWorkPermit = prompt('Do you have your work permit? (true/false)');
// if (haveStudyPermit === "true" || haveWorkPermit === "true") {
//   console.log('You can enter Canada as a foreigner.');
// }

// One statement for !
// let z = prompt(`are healthy or sick?`);
// let sick = "sick"

// if (!(z === sick)) {
//   console.log(`that\`s very good, you are healthy.`);
// }

// One statement for > / >=
// let a = prompt("first number = ")
// let b = prompt("second number = ")

// if (a > b) {
//   console.log(`${a} is greater than ${b}`)
// }

// One statement for < / <=
// less than
let h = prompt("length  = ")
let w = prompt("width = ")

if (h < w) {
  console.log(`${h} < ${w}`)
}

// // hello world after 3 seconds of loading

// console.log("loading...")

// setTimeout(() => {
//   console.log("Hello world!")
// }, 3000);
// // arrow function, this is the default when you use tab

// // setTimeout(function(){
// //   console.log("Hello world!")
// // }, 3000)
// // This also works too

// // reqady, set, go! (console.logging after loading/hello world)

// setTimeout(() => {
//   console.log("Ready")
// }, 4000);

// setTimeout(() => {
//   console.log("Set")
// }, 5000);

// setTimeout(() => {
//   console.log("GOOOO!")
// }, 6000);


// // "What will happen" slide?

// const x = function() {
//   console.log('...');
//   setTimeout(x, 5000);
// };

// x();
// // This funnction is written in long form
// // It is a recursive function, so it is going to loop

// // This is the short form version (what we are probably more used to seeing)
// function x() {
//   console.log('...');
//   setTimeout(x, 5000);
// };

// x();

// //setInterval demo

// setInterval(() => {
//   console.log("hello world!!!")
// }, 1000);

// // setInverval Counter Exercise

// let counter = 1

// setInterval(() => {
//   console.log(counter++)
// }, 1000);

// Odd Even Counter Exercise

// let odd = 1
// console.log(odd)
// setInterval(() => {
//   console.log(odd += 2)
// }, 2000);


// let even = 2
// setTimeout(() => {
//   console.log(even)
//   setInterval(() => {
//     console.log(even += 2)
//   }, 2000);
// }, 1000);

// // clearInterval Exercise after 10 seconds
// console.log("hello everyone!")
// const interval = setInterval(() => {
//   console.log("hello everyone!")
// }, 1000);


// setTimeout(() => {
//   clearInterval(interval)
// }, 10000);

// Countdown rocket exercise
let countdown = 10

const blastoff = setInterval(() => {
  console.log(countdown--)
  if (countdown === 0){
    clearInterval(blastoff)
  }
}, 1000);

setTimeout(() => {
  console.log("Blast off!!!")
}, 11000);

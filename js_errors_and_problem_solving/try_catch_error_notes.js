// try...catch...finally exercise

// using try...catch...finally, try to catch the follow errors
// 1. Type Error
// 2. Reference Error
// 3. Range Error


// type error
let x = "hungry";

try {
  x.pop(); // cant .pop() on a string
} catch (error) {
  console.log("error", error);
} finally {
  console.log("I am inevitable")
}

// reference error
try {
  callThem(); // callThem function has not been defined
} catch (error) {
  console.log("the error is:", error);
} finally {
  console.log(`I think it's ok!`)
}

// range error
const num = function (x) {
  console.log(x.toPrecision(101));
};

try {
  num(0.005); // num function is trying to do .toPrecision(101) but the range is 0-100
} catch (error) {
  console.log('Range Error', error);
} finally {
  console.log('You should check precision number');
}

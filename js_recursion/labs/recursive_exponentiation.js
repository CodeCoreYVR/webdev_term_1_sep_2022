const pow = (base, exp) => {
  let result = base;
  let counter = exp;

  if (exp < 0 || base < 0) {
    return 'Nope!';
  } else if (base === 1 || exp === 0) {
    return 1;
  } else if (base === 0) {
    return 0;
  } else if(exp === 1) {
    return base;
  } else {
    counter--;
    result *= pow(base, counter);
  }
  return result;
}

console.log(pow(10, 3)) // 1000
console.log(pow(2, 4)) // 16
console.log(pow(0, 100)) // 0
console.log(pow(1, 1000)) // 1





// [Lab] Recursive Exponentiation
// Opened: Saturday, 22 January 2022, 12:00 AM
// Due: Sunday, 20 March 2022, 8:00 PM

// Write a function, `pow`, that takes in a base number and an exponent. 
// It must return the base number to the power of the exponent using 
// *recursion*. You are not allowed to use the `**` operator nor the 
// `Math.pow` function.

// Example usage:
// ```javascript
// pow(10, 3) // 1000
// pow(2, 4) // 16
// pow(0, 100) // 0
// pow(1, 1000) // 1
// ```
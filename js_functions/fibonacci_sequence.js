let fibonacci = num => {
  let array = [];
  if (typeof(num) !== 'number') {
    console.log('Expected number')
  } else if (num <= 0) {
    console.log('Expected a positive number above 0')
  } else {
    for (let n = 1; n <= num; n++) {
      if (n === 1) {
        array.push(1)
      }
      if (n === 2) {
        array.push(1)
      }
      if (n > 2) {
        array.push(array[n-2] + array[n-3])
      }
    }
  }
  array.map(number => console.log(number));
  return array
}

fibonacci(6)
// *********************** Ayaka's more elegant version ***********************
const fib = function (num) {
  let n1 = 1,
  n2 = 1,
  n3;
  for (let i = 1; i <= num; i++) {
    console.log(n1);
    n3 = n1 + n2;
    n1 = n2;
    n2 = n3;
  }
};
fib(1);
// ****************************************************************************




// [Lab] Fibonacci Sequence

// Write a function that accepts a number. It will print the fibonacci 
// sequence starting at 1, up to that number.


// ```

// fib(6)
// 1
// 1
// 2
// 3
// 5
// 8

// ```
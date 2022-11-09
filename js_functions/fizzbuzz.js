function fizzBuzz(x, y) {
  if ((typeof(x) !== 'number') || (typeof(y) !== 'number') || (x < 0) || (y < 0)) {
    console.log('Expected two positive numbers')
  } else {
    for (let n = 1; n <= 100; n++) {
      if (n % x === 0 && n % y === 0) {
        console.log('fizzuzz');
      } else if (n % x === 0) {
        console.log('fizz');
      } else if (n % y === 0) {
        console.log('buzz');
      } else {
        console.log(n)
      }
    }
  }
}


fizzBuzz(10,'4')


// [Lab] FizzBuzz

// Write a function that accepts two numbers, `x` and `y`, as arguments.

// It will loop from 1 to 100.
// On every iteration it will print "fizz" if `x` is cleanly divisible by 3
// On every iteration it will print "buzz" if `y` is cleanly divisible by 5
// If both `x` and `y` are divisible it will print "fizzbuzz"
// If it is not divisible then it will just print the current number


// ```
// fizzBuzz(3, 5)
// 1
// 2
// fizz
// 4
// buzz
// fizz
// 7
// 8
// fizz
// buzz
// 11
// fizz
// 13
// 14
// fizzbuzz
// ...

// ```
const fibonacci = number => {
  if (number <= 1) {
    return 1;
  }

  return fibonacci(number - 1) + fibonacci(number - 2);
}

const fibonacci2 = number => {
  if (number <= 1) {
    return 1;
  }
  let fib1 = 1;
  let fib2 = 1;
  let fib3;

  for (let i = 1; i < number; i++) {
    fib3 = fib1 + fib2;
    fib1 = fib2;
    fib2 = fib3;
  }
  return fib3;
}

console.log(fibonacci(5))
console.log(fibonacci2(5))

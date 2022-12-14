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
console.log(`----------`)
console.log(`-- 0: ${fibonacci(0)} --`)
console.log(`----------`)
console.log(`-- 0: ${fibonacci2(0)} --`)
console.log(`----------`)
console.log(`-- 1: ${fibonacci(1)} --`)
console.log(`----------`)
console.log(`-- 1: ${fibonacci2(1)} --`)
console.log(`----------`)
console.log(`-- 2: ${fibonacci(2)} --`)
console.log(`----------`)
console.log(`-- 2: ${fibonacci2(2)} --`)
console.log(`----------`)
console.log(`-- 3: ${fibonacci(3)} --`)
console.log(`----------`)
console.log(`-- 3: ${fibonacci2(3)} --`)
console.log(`----------`)
console.log(`-- 4: ${fibonacci(4)} --`)
console.log(`----------`)
console.log(`-- 4: ${fibonacci2(4)} --`)
console.log(`----------`)

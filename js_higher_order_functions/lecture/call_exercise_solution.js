function doubleIt(x) {
  return x * 2
}

// function call(num, func) {
//   console.log(func(num))
// }

// call(0, doubleIt)

// 5 => 10 => 20 => 40

function call(num, func, noOfTimes) {
  for (let i = 0; i < noOfTimes; i++){
    console.log(func(num))
    num = func(num)
  }
  return num
}

call(1, doubleIt, 10)

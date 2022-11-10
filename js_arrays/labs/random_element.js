function randomElement(arr) {
  let RandomIndex = Math.floor(Math.random() * arr.length)
  return arr[RandomIndex];
}

console.log(randomElement([1,2,3,4]));
randomElement([1,2,3,4]);




// [Lab] Random Element
// Opened: Friday, 28 October 2022, 1:00 AM

// Write a function, randomElement that takes an array and returns a 
// random element from that array.


// Example:
// randomElement([1, 2, 3, 4]) // -> 3
// randomElement([1, 2, 3, 4]) // -> 1
// randomElement(["hi", true, [1, 2, 3, 4]]) // -> true
// randomElement(["hi", true, [1, 2, 3, 4]]) // -> [1, 2, 3, 4]



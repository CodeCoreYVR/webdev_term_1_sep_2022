const array = [1, 22, "horse", 133, true, "cat", "dog", 6, "mouse", false],
  integers = [],
  strings = [];

const twoStacks = arr => {
  // for (val of arr) { // both loops work
  //   if (Number(val) === val) {
  //     integers.push(val)
  //   } else if (String(val) === val) {
  //     strings.push(val)
  //   }
  // }
  arr.forEach(val => {
    Number(val) === val 
      ? integers.push(val) 
      : String(val) === val 
        ? strings.push(val) 
        : null
  })
}

twoStacks(array);

console.log(integers, strings);



// [Lab] One Array Two Stacks

// Using the array:
// const array = [1, 22, 'horse', 133, true, 'cat', 'dog', 6, 'mouse', false];

// Implement two stacks. First stack should contain integers and second stack
// should contain strings, both in order of appearance.

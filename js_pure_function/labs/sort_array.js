const words = ['blue', 'apple', 'likes', 'bandaids'];

const sortArray = arr => {
  let sortedArray = [...arr]
  return sortedArray.sort()
}

console.log(sortArray(words)); // ['apples', 'bandaids', 'blue', 'likes'];
console.log(words) // ['blue', 'apple', 'likes', 'bandaids']



// [Lab] Sort Array

// Write a function sortArray that accepts an array of words. It will 
// sort these words by alphabetical order.

// const words = ['blue', 'apple', 'likes', 'bandaids'];
// console.log(sortArray); // ['apples', 'bandaids', 'blue', 'likes'];

// Make sure the original array does  not mutate.

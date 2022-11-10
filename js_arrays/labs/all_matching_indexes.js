function matchingIndexes(arr, a) {
  let equalIndexes = [];
  
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === a) {
      equalIndexes.push(i);
    }
  }
  return equalIndexes;
}

console.log(matchingIndexes(["hola", "hello", "bonjour", "hola"], "hola"));
matchingIndexes(["hola", "hello", "bonjour", "hola"], "hola");
console.log(matchingIndexes([10, -2, 7, 9], 7));
matchingIndexes([10, -2, 7, 9], 7);




// [Lab] All Matching Indexes
// Opened: Friday, 28 October 2022, 1:00 AM

// indexOf() only returns the first index of the array where the element 
// matches the argument. Write a function, matchingIndexes, that takes an 
// array, arr and a value, val. It returns an array of all the indexes in 
// arr that are equal to val.


// Example:
// matchingIndexes(["hola", "hello", "bonjour", "hola"], "hola"); // -> [0, 3]
// matchingIndexes([10, -2, 7, 9], 7); // -> [2]



let multiDimArray = [[1,2,[3,4]], 5, [6,7]];

// --------------------- Lab ---------------------
const deepClone = arr => {
  let arrCopy = JSON.parse(JSON.stringify(arr))
  // arrCopy[0][0]++; // uncomment this to see function doesn't mutate original array
  return arrCopy
}
// ------------------- Stretch -------------------
let deepClone2 = arr => {
  let clonedArray = [];
  for (let val of arr) {
    if (Array.isArray(val) === true) {
      clonedArray.push(deepClone2(val))
    } else {
      // val++ // uncomment this to see function doesn't mutate original array
      clonedArray.push(val)
    }
  }
  return clonedArray;
}
// -------------------- Test ---------------------
console.log(deepClone(multiDimArray));
console.log(deepClone2(multiDimArray));
console.log(multiDimArray);


// [Lab] Deep Clone Array 

// Write a function deepClone that accepts a multi-dimensional array. 
// It will return a new deep cloned copy of the array.

// Stretch
// Do this without JSON

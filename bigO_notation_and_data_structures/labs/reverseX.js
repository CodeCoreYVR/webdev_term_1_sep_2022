const array = ["a", "b", "c", "d", "e", "f", "g"];

const reverseX = (x, arr) => {
  if (Array.isArray(arr) && x >= 0 && x <= arr.length) {
    const tempArray = [...arr],
      stack = [];

    for (let i = 0; i < tempArray.length; i++) {
      if (i === x) {
        return [...stack, ...tempArray.slice(x)];
      } else {
        stack.unshift(tempArray[i]);
        if (stack.length === tempArray.length) {
          return stack;
        }
      }
    }
    
  } else {
    return 'failed! Incorrect arguments!'
  }
}

console.log(reverseX(3, array));





// [Lab] reverseX

// Write a function that accepts a integer "x" and a queue. It will reverse 
// the first "x" integers in the provided queue.

//     The function throws if the provided "queue" is not a instance of a Queue

// reverseX(3, ["a", "b", "c", "d", "e", "f", "g"]);
// Returns ~> ["c", "b", "a", "d", "e", "f", "g"]

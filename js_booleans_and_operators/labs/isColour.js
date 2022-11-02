let arg = process.argv[2];

let str;
let colours = ['red', 'blue', 'green', 'yellow', 'white', 'brown'];

if (arg) {
  colours.forEach(
    function(colour) {
      if (colour === arg.toLowerCase()) {
        str = `\"${arg}\" is a colour!`;
      }
    }
  )
} else {
  console.log(`Incorrect input. Please type something like:\n$ node isColour.js green\nBecause:`);
}

str ? console.log(str) : console.log(`\"${arg}\" is not a colour!`);
// ----------------------------- or -----------------------------
console.log('----------------- or -----------------')
let argArr = process.argv.slice(2);

let arr;
let colours2 = ['red', 'blue', 'green', 'yellow', 'white', 'brown'];

if (process.argv[2]) {
  arr = [];
  for (let i = 0; i < argArr.length; i++) {
      colours2.forEach(
        function(colour) {
          if (colour === argArr[i].toLowerCase()) {
            arr.push(`\"${argArr[i]}\" is a colour!`);
          }
        }
      )
    if (!arr[i]) {
      arr.push(`\"${argArr[i]}\" is not a colour!`)
    }
  }
} else {
  console.log(`Incorrect input. Please type something like:\n$ node isColour.js green\nBecause:\n\"${undefined}\" is not a colour!`);
}

if (arr) {
  !arr[1] ? console.log(arr[0]) : console.log(arr)
}
// // ----------------------------- end ----------------------------



// [Lab] isColour
// Opens: Wednesday, 9 November 2022, 12:00 AM
// Write a script iscolour.js that accepts a string, x, as an argument. 
// If x is a colour it will return “x is a colour” If x is not a colour 
// it will return “x is not a colour”. Have at least 6 colours.



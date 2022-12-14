let i, output = "";
// Start the timers now
console.time("concatenating strings");
for (i = 1; i <= 1e7; i++) {
  output += i;
}
// Print the total time it took to perform the
// operation since starting
console.timeEnd("concatenating strings");

// note: the strings in console.time and console.timeEnd need to be the same

////////////////

// testing recursive function

let newStringArray = []

function reverseString(string) {
  if (string.length === 0) {
    return newStringArray.join("")
  } else {
    splitStringArr = string.split("")
    newStringArray.unshift(splitStringArr[0])
    splitStringArr.shift()
    string = splitStringArr.join("")
    return reverseString(string)
  }
}
console.time("Testing how long reverseString() takes")
console.log(reverseString("good bye"))
console.timeEnd("Testing how long reverseString() takes")

// testing iterative function

function reverseString2(string) {
  newStringArray = []

  for (i = string.length; i > 0; i--) {
    splitStringArr = string.split("")
    newStringArray.unshift(splitStringArr[0])
    splitStringArr.shift()
    string = splitStringArr.join("")
  }

  return newStringArray
}

console.time("Testing how long reverseString2() takes")
console.log(reverseString2("hello"))
console.timeEnd("Testing how long reverseString2() takes")

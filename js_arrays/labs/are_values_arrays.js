function areValuesArrays(arr) {
  for (let i = 0; i < arr.length; i++) {
    // if (arr[i].constructor !== Array) { // thiscan be used instead of line 4 or 5
    // if ((arr[i] instanceof Array) === false) { // this can be used instead of line 3 or 5
    if (!Array.isArray(arr[i])) { // this can be used instead of line 3 or 4
      return false;
    }
  }
  return true;
}
console.log(areValuesArrays([[1], [2], [4, 5]]));
console.log(areValuesArrays([1, [2], [6, 7, 8]]));
console.log(areValuesArrays([[1], 2, [6, 7, 8]]));
console.log(areValuesArrays(['true', 'false']));

// //  bellow is strictly to show what is happening
function areValuesArrays2(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(`************************************************************************************`)
    console.log(`**************************** Start of example 1 index ${i} ****************************`)
    console.log(`if (${arr[i] instanceof Array ? '[' : ''}${arr[i]}${arr[i] instanceof Array ? ']' : ''} instanceof Array) \{ // returns ~> ${arr[i] instanceof Array}`)
    console.log(`Evaluates to:`)
    console.log(`if (${Array.isArray(arr[i])}) \{ // returns ~> ${arr[i] instanceof Array}`)
    console.log(`**************************** Start of example 2 index ${i} ****************************`)
    console.log(`if ((${arr[i] instanceof Array ? '[' : ''}${arr[i]}${arr[i] instanceof Array ? ']' : ''} instanceof Array) === false) \{ // returns ~> ${(arr[i] instanceof Array) === false}`)
    console.log(`Evaluates to:`)
    console.log(`if (${Array.isArray(arr[i])} === false) \{ // returns ~> ${(arr[i] instanceof Array) === false}`)
    console.log(`Evaluates to:`)
    console.log(`if (${Array.isArray(arr[i]) === false}) \{ // returns ~> ${(arr[i] instanceof Array) === false}`) 
    console.log(`********************************* end of index ${i} ***********************************`)
    console.log(`************************************************************************************`)
    console.log(` `)
  }
}

console.log(`\n\n************************************************************************************`)
console.log(`******* // Displaying examples of what\'s happening in one of the conditionals ******`);
console.log(`**** // We want this conditional to only kick in if the value is \"NOT\" an array ****`)
console.log(`************************************************************************************\n`)
areValuesArrays2([[1], [2], [4, 5]]);
areValuesArrays2([1, [2], [6, 7, 8]]);
areValuesArrays2([[1], 2, [6, 7, 8]]);
areValuesArrays2(['true', 'false']);
console.log(`************************************************************************************`)
console.log(`******************************** end of examples ***********************************`)
console.log(`************************************************************************************`)
// // end if showing what's happing






// [Lab] Are Values Arrays?
// Opened: Friday, 28 October 2022, 1:00 AM

// Write a function, `areValuesArrays`, that takes an array, `arr`. It 
// returns `true` if all values in `arr` are of the `array` type 
// otherwise it returns `false`.


// Example:
// areValuesArrays([[1], [2], [4, 5]]); // returns true
// areValuesArrays([1, [2], [6, 7, 8]]); // returns false
// areValuesArrays([[1], 2, [6, 7, 8]]); // returns false
// areValuesArrays(['true', 'false']); // returns false



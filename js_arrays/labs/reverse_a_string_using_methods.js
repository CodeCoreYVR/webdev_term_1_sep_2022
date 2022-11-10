// **************************** option 1 ****************************
const reverse = function(string) {
  let str = string;
  return str.split('').reverse().join('');
}
// bellow is the same thing as above
const reverse1 = function(string) {
  let stringArray = string.split('');
  let reversedArray = stringArray.reverse();
  let reversedString = reversedArray.join('')
  return reversedString;
}
// ********************** option 2(yesterdays) **********************
const reverse2 = function(string) {
  let str = '';
  for (let i = string.length - 1; i >= 0; i--) {
    str += string[i];
  }
  return str;
}
// **************************** option 3 ****************************
const reverse3 = function(string) {
  let stringArray = string.split(''); // splits str into an array
  let reverseArray = []; // empty array will receive reversed values from the loop below
  for (let i = 0; i < stringArray.length; i++) {
    reverseArray.unshift(stringArray[i]); // each value of strArray will be placed at the beginning of reverseArray
  }
  let reverseString = reverseArray.join('') // turning reverseArray into a string from an array
  return reverseString; // this returns  a value but doesn't log anything to the terminal
}
// ****************************** end *****************************

console.log(reverse('hello')) // logging results to the terminal for developers(us)
console.log(reverse1('hello')) // logging results to the terminal for developers(us)
console.log(reverse2('hello')) // logging results to the terminal for developers(us)
console.log(reverse3('hello')) // logging results to the terminal for developers(us)

reverse('hello')



// [Lab] Reverse a String using Methods
// Opened: Friday, 28 October 2022, 1:00 AM
// Due: Friday, 4 November 2022, 1:00 AM

// Rewrite the reverse function from the previous lab but this time using splitand join

// Example:

// reverse("hello") // "olleh"
// reverse("nor") //"ron"
// reverse("codecore") // "erocedoc"
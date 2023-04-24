// Define a string variable
let string = 'This is a string';

// Define a function to reverse the string
const reverseString = str => {
  let reversedLetters = []; // Use an array as a stack to store reversed letters

  // Loop through each letter of the string (O(n) time complexity)
  for (letter of str) {
    reversedLetters.unshift(letter); // Add each letter to the beginning of the reversedLetters array (O(1) time complexity)
  }
  
  // Combine all the reversed letters into a single string (O(n) time complexity)
  return reversedLetters.join('');
}

// Call the reverseString function and log the result to the console
console.log(reverseString(string));


// [Lab] Reverse a String

// Reverse a string using a Stack.



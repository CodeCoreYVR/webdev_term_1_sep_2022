let string = 'This is a string';

const reverseString = str => {
  let revStr = [];

  for (l of str) {
    revStr.unshift(l);
  }
  return revStr.join('')
}

console.log(reverseString(string));



// [Lab] Reverse a String

// Reverse a string using a Stack.

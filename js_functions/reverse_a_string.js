let string = 'hello';

function reverse(str){
  let array = [];
  let strArray = str.split('');
  
  for (let i = strArray.length -1; i >= 0; i--) {
    array.push(strArray[i])
  }

  console.log(array.join(''));
  return array.join('');
}



reverse(string);




// [Lab] Reverse a String

// Write a function, `reverse` that takes a string and returns another 
// string with the characters in reverse order.


// Example:


// ```javascript

// reverse("hello") // "olleh"

// reverse("dog") // "god"

// reverse("codecore") // "erocedoc"

// ```


// Is it possible to modify the string itself instead of returning a copy 
// of the original string? Why or why not?
let value = 4;

let greeting = function(name) {
  if (typeof(name) === 'string') {
    return `hello ${name}`;
  } else {
    return `Expected string instead got ${typeof(name)}`;    
  }
}

console.log(greeting(value));
greeting(value);



// [Lab] Hello

// Write a function `greeting` that accepts a parameter `name`.


// It will return `"hello name"`


// It should return "Expected string instead got x" if the argument 
// is a value other than a string.


// ```

// greeting("MJ") // returns "hello MJ"


// greeting(55) // returns "Expected string instead got number"


// greeting(false) // returns "Expected string instead got boolean"
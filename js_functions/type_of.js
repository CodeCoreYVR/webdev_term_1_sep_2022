// ************************ Lab didn't disallow this *************************
// function typeOf(val) {
//   return typeof(val);
// }
// ********************** this sounds like what is asked ********************* 
function a() {
  return 'Doesn\'t matter what this returns'
}

let value = a;

function typeOf(val) {
  if (val.constructor === Number) {
    return 'number';
  } else if (val.constructor === String) {
    return 'string';
  } else if (val.constructor === Boolean) {
    return 'boolean';
  } else if (val.constructor === Array) {
    return 'array';
  } else if (val.constructor === Object) {
    return 'object';
  } else if (val.constructor === Function) {
    return 'function';
  }
}
// ****************************************************************************

console.log(typeOf(value));
typeOf(value);





// [Lab] Type Of

// Write a function that accepts a value. It returns the type of the value as a string.


// ```

// typeOf(true) // returns "boolean"


// typeOf(3) // returns "number"
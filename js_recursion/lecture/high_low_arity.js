// high arity
function add1(x, y, z) {
  return x + y + z
}

// low arity
function add2(x){
  console.log("I am inside function(x)")
  return function(y) {
    console.log("I am inside function(y)")
    return function(z){
      console.log("I am inside function(z)")
      return x + y + z
    }
  }
}

console.log(add1(1, 2, 3))
console.log(add2(1)(2)(3))

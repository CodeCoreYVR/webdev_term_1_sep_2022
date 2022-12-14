function factorial(n){
  // base case
  if(n === 1 || n === 0) {
    // just if (n===0) works as well
    console.log("...result of factorial(1)...")
    return 1
  } else {
    console.log("console.logging in else to check n")
    console.log(n)
    return n * factorial(n-1)
  }
}

console.log(factorial(1))

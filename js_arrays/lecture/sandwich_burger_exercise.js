// sandwich exercise

sandwich = ["bacon", "cheese", "lettuce", "beef patty", "ketchup"]
// array with all fillings and sauces in it

sandwich.unshift("top slice of bread")
// adding the top slice of bread

sandwich.push("bottom slice of bread")
// adding the bottom slice of bread

console.log(sandwich)

//////////////

// sandwich to burger exercise
let burger = sandwich

burger.pop()
burger.push("bottom bun")

burger.shift()
burger.unshift("top bun")


////////////

// // bigger burger exercise (example 1 - top bun unshifted in)
// console.log(burger)
// // remove the top bun
// burger.shift()

// // array with 3 more fillings
// moreFillings = ["another patty", "more cheese", "onions"]

// // join everything all back together
// let biggerBurger = moreFillings.concat(burger)

// // putting a bun back on
// biggerBurger.unshift("top bun")

// // bigger burger's datatype should be an array
// console.log(biggerBurger)


// bigger burger exercise (example 2 - storing top bun in a variable)
console.log(burger)
// remove the top bun
let topBun = [burger.shift()]
// needs to be stored as array, or else when we .concat() the result will be a string
console.log(typeof(topBun))

// array with 3 more fillings
moreFillings = ["another patty", "more cheese", "onions"]

// join everything all back together
let biggerBurger = topBun.concat(moreFillings, burger)

// bigger burger's datatype should be an array
console.log(biggerBurger)

///////

// string burger exercise

biggerBurger = biggerBurger.join(", ")

console.log(biggerBurger)

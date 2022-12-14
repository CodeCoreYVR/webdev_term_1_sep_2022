// arrow function

const bark = (dogName, sound = "woof!") => {
  return `${dogName} is saying ${sound}`
}
console.log(bark("Spot", "weeerf!"))

// arrow function with no curly brackets and return
const baa = (sheepName, sound = "baa!") =>
console.log(`${sheepName} is saying ${sound}`)

baa("Dolly")

// If it were a regular functionn

function meow(catName, sound = "meow!") {
  return `${catName} is saying ${sound}`
}

console.log(meow("Felix", "purrrr!"))

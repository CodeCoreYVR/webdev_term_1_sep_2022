const prompt = require("prompt-sync")();

// Strings Math Exercise
let a = "1"
let b = "0"
let c = "0"
// console.log(a + b + c)

// Input Chatbot Exercise (Joining strings)
const name = prompt("What is your name? ")
console.log("Hello " + name)

const age = prompt("How old are you? ")
console.log("I see, you are " + age + " years old")

const colour = prompt("What is your favourite colour? ")
console.log("That's good, " + colour + " is a strong colour!")

const home = prompt("Where are you from? ")
console.log("Cool! I want to visit " + home + " someday!")

// Input Chatbot Exercise (2.0 - interpolation questions)
const car = prompt("What car do you have? ")
console.log(`Wow ${car} is a cool car!`)

const shark = prompt("What's your favourite type of shark? ")
console.log(`I see, I think ${shark} is a scary shark!`)

const food = prompt("What is your favourite food? ")
console.log(`Cool. I think ${food} are yummy!`)

// Input Chatbot Exercise (3.0 Summary on different lines)
console.log(`\nI've learnt a lot about you today ${name}.
  \nYou are ${age} years old.
  \nYou like the colour ${colour}.
  \nYou are from ${home}.
  \nYou own a nice ${car}.
  \nYou favourite shark is the ${shark}.
  \nYou like to eat ${food}.
  \nIt was nice talking to you ${name}. Have a great day :)`)

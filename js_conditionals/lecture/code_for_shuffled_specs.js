// Keerat's Spec - Hooman will code this
// make an automactic grade checker by entering the mark of student and name.
// Print "S grade" if marks is between 81 and 100.
// Print "A grade" if marks is between 61 and 80.
// Print "B grade" if marks is between 41 and 60.
// Print "Student has failed" if marks is between 0 and 40.
// Else print "Invalid marks"

const prompt = require(`prompt-sync`)();

let number = prompt(`What is your number? `)
if (number <= 100 && number > 80) {
  console.log(`S grade.`)
} else if (number <= 80 && number > 60) {
  console.log(`A grade.`)
} else if (number <= 60 && number > 40) {
  console.log(`B grade`)
} else if (number <= 40 && number >= 0) {
  console.log(`Student has failed.`)
} else {
  console.log(`Invalid marks.`)
}

/////////////////////////

// Ayaka's Spec - Ron will code this
// scenario: Are you allowed to ride "Big Thunder Mountain Railroad"?
// height: Is your height over 102cm (40in)?
// age: Older than 3?
// Safety: Are you good at speed? (If you are scared of speed, it is better to not ride)
// Safety: Are you a pregnant? (If true, you cannot ride)
// Safety: Do you have any problem with loud sounds? (If you have any problems of loud sound, it is better to not ride)
let height = 100;
let age = 10;
let goodSpeedTolerance = true;
let pregnant = false;
let noiseSenitivity = true;

if (height < 102) {
  console.log("You are too short to ride this awesome coaster. You're really missing out on a great expereince!")
} else if (age < 3) {
  console.log("You are too young to ride this coaster.")
} else if (!goodSpeedTolerance) {
  console.log("I guess you don't like to go fast. You may not ride.")
} else if (pregnant) {
  console.log("You are with child, you may not ride.")
} else if (noiseSenitivity) {
  console.log("You don't like loud noises, you may not ride.")
} else {
  console.log("Get on and enjoy the coaster. You may ride!!")
};

/////////////////////////

// Hooman's Spec - Keerat will code this
// in the airport, controlling passengers.
// 1. do you have any thing illegal in your cargo package or carry-on?
// 2. do you have plane tickets?
// 3. do you have your personal documents to enter the destination country?
// 4. is the total weight of your package is below the limit?
// 5. checking if you have permission to legally get out of the country?

let illegalThings = false
let tickets = true
let personalDocument = true
let wieght = 20
let limit = 23
let permissionToLeaveCountry = "go ahead"

if (illegalThings) {
  console.log("Let me check your bag")
} else if (tickets === false) {
  console.log("you can't you fly without a ticket, sorry")
} else if (personalDocument === false) {
  console.log("Sorry, you don't have the documents to get into your destination country")
} else if (wieght > limit) {
  console.log("Please pay a bit more for your bags. They are over the limit")
} else if (permissionToLeaveCountry === "no") {
  console.log("You can't leave the country, you don't have permission")
} else {
  console.log("Have a safety flight!")
}

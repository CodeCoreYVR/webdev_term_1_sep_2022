// Interpotation Exercise

let firstName = "Spongebob"
let surname = "Squarepants"
let age = 26
let birthday = "17/07/1995"
let country = "Bikini Botttom"

let bio = `Hello my name is ${firstName} ${surname}. I am ${age} years old. I was born on ${birthday}. I am from ${country}`

console.log(bio)

// Hash Exercise

let pet = { name: "Max", species: "dog", age: 1, favouriteToy: "bone plushie" }

console.log(pet)
// this will show the object

console.log(typeof(pet))
// this will show the type of data type. In this case, it will print 'object' in the console/terminal

// Symbol Demo

let id = Symbol("id")

pet[id] = "100"

console.log(pet.id)

// let, const, var demo

// let
let changableName = "Herry"
console.log(changableName)
changableName = "Harry"
console.log(changableName)

// const
const nameThatCantBeChanged = "Bob"
console.log(nameThatCantBeChanged)
// nameThatCantBeChanged = "Bobby" => will give you "TypeError: Assignment to constant variable." message

// var (don't use this! it kind of acts like let but it's old)
var varName = "Rick"
console.log(varName)
varName = "Ricky"
console.log(varName)

// Split candy exercise

let girls = 1
let boys = 3
let candies = 8

let totalKids = girls + boys
console.log(`There are ${totalKids} kids in the class`)

console.log(`...so the teacher should give ${candies / totalKids} candies to each kid`)

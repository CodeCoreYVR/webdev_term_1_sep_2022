// function Student(name, age){
//   this.name = name;
//   this.age = age;
// }
// // Student.subject = "webdev" will result as undefined
// Student.prototype.subject = function() {
//   return "webdev"
// }

// // Student.prototype.printInfo = function() {
// //   console.log(`${this.name} is ${this.age} years old.`)
// // }

// const ayaka = new Student("Ayaka", 26)
// const ron = new Student("Ron", 27)
// const hooman = new Student("Hooman", 29)
// const keerat = new Student("Keerat", 21)

// ayaka.country = "japan"


// console.log(ayaka)
// // ron.printInfo()
// console.log(hooman.subject)
// console.log(keerat)


// changing price of car exercise

function Car (make, price) {
  this.make = make;
  this.price = price;
}

Car.prototype.newPrice = function(newPrice) {
  return this.price = newPrice;
}

const mini = new Car("mini", 20000)
const ferrari = new Car("ferrari", 800000)
// console.log(mini)
console.log(ferrari)
console.log(ferrari.newPrice(200000))
console.log(ferrari)



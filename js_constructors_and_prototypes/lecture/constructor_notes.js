// const kinman = {
//   name: "Kinman",
//   birthday: "17th May"
//   relation: "brother"
// }

// const sisi = {
//   name: "Sisi",
//   birthday: "11th April"
//   relation: "best friend"
// }

// const kar = {
//   name: "Karshan",
//   birthday: "26th May"
//   relation: "father"
// }

function Person(name, birthday, relation) {
  this.name = name;
  this.birthday = birthday;
  this.relation = relation;
}

const kinman = new Person("Kinman", "17th May", "brother")
const sisi = new Person("Sisi", "11th April", "best friend")
const kar = new Person("Karshan", "26th May", "father")

console.log(kinman)
console.log(sisi)
console.log(kar)

// Car Constructor exercise

function Car(make, price) {
  this.make = make;
  this.price = price;
  this.printCarInfo = function() {
    console.log(`This car's brand is ${this.make} and the cost is ${this.price}`)
  }
}

const mustang = new Car("Ford Mustang", 29999)
const c300 = new Car("Mercedes C300", 12800)
const audiA70 = new Car("Audi A70", 10000)
const huracan = new Car("Lamborghini Huracan", 245245)
const mazda = new Car("Mazda 6", 18000)

console.log(mustang)
console.log(c300)
console.log(audiA70)
console.log(huracan)
console.log(mazda)
mazda.printCarInfo();

// Adding a method in a Constructor
// a method is basically a function that's in an object

function Dog(name, favouriteToy) {
  this.name = name;
  this.favouriteToy = favouriteToy;
  this.printDogInfo = function () {
    console.log(`This dog's name is ${this.name} and it's favourite toy is a ${this.favouriteToy}.`)
  }
}

const max = new Dog("Max", "red bouncy ball")

max.printDogInfo();

// Arrow function example (it will nto work)

// const Dog = (name) => {
//   this.name = name;
// }

// new Dog ("Max")

// Step Counter Exercise

function Counter(count, step = 1) { // step = 1 will default steps to 1 unless something else has been declared
  this.count = count || 0; // count will be set to 0 unless stated otherwise
  this.step = step;

  this.inc = function() {
    this.count += this.step
  }

  this.now = function () {
    return `You have walked a total of ${this.count} steps`
  }
}

const steps = new Counter(2, 5)
console.log(steps)

steps.inc()
console.log(steps)


steps.inc()
steps.inc()
steps.inc()
steps.inc()
steps.inc()
steps.inc()
steps.inc()
steps.inc()

console.log(steps.now())


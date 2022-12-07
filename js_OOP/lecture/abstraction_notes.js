function Vehicle(){
  throw new Error(`Can't create an instance of abstract class of "Vehicle". Please use "Car" or "Truck" instead`)
}

Vehicle.prototype.drive = function(){
  return `Driving ${this.make} ${this.model}`
}

// const mini = new Vehicle("mini")
// mini.drive()
// the above lines will call an error because we are using the Vehicle constructor

// constructor for Car
function Car(make, model) {
  this.make = make;
  this.model = model;
}

Object.setPrototypeOf(Car.prototype, Vehicle.prototype)

// constructor for Truck
function Truck(make, model) {
  this.make = make;
  this.model = model;
}

Object.setPrototypeOf(Truck.prototype, Vehicle.prototype)


const mini = new Car("mini", 2020)
console.log(mini.drive())
console.log(mini)

const someTruck = new Truck("A really big truck", 1999)
console.log(someTruck.drive())
console.log(someTruck)



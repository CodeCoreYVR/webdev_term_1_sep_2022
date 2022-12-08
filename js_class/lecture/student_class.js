// Orginal code from constructor and protoypes lesson

// function Student(name, age){
//   this.name = name;
//   this.age = age;
// }
// // Student.subject = "webdev" will result as undefined
// Student.prototype.subject = function() {
//   return "webdev"
// }

// Student.prototype.printInfo = function() {
//   console.log(`${this.name} is ${this.age} years old.`)
// }

// Putting everything into a class

class Student {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  subject() {
    console.log("webdev")
  }

  printInfo() {
    console.log(`${this.name} is ${this.age} years old.`)
  }
}

const hooman = new Student ("hooman", 29)

console.log("----below we are printing hooman's object made from the class---")
console.log(hooman)
console.log(`----below we are calling ".subject()" method which will print "webdev" as it has console.log in the method--`)
hooman.subject()
console.log(`----below we are console.logging "hooman.subject", it will show the function----`)
console.log(hooman.subject)
console.log(`----below we are console.logging "hooman.subject()".This will return as undefined because we are not returning anything----`)
console.log(hooman.subject())

console.log("----below we will print the info---")
hooman.printInfo()


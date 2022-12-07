
// Master/Base/Parent/Super Class (This is the class we are extending/inheriting from)
class Shape {
  draw() {
    return "Drawing a shape"
  }
}

// Derived/Sub/Child Class (This class is inheriting from the Shape Class)
class Circle extends Shape {
  constructor(){
    super();
  }

  draw() {
    return "Drawing a circle"
  }
}

// Derived/Sub/Child Class (This class is inheriting from the Shape Class)
class Square extends Shape {
  constructor() {
    super();
  }

  draw() {
    return "Drawing a square"
  }
}

// Derived/Sub/Child Class (This class is inheriting from the Shape Class)
class Rectangle extends Shape {
  constructor() {
    super();
  }
  // note: we don't have a draw method in this class
}

const circle = new Circle()
const square = new Square()
const rectangle = new Rectangle()

console.log(circle.draw())
console.log(square.draw())
console.log(rectangle.draw())

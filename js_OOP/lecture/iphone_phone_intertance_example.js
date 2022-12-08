// Practicing with "super" and "extend"

// Using the OOP concept, let's practice inheritting and overriding from a Master Class.

// Make a Master Class
// Make a Sub Class which inherits from the Master class
// (using the keywords "extend" annd "super")

class Phone {
  constructor(make, year, colour, camera) {
    this.make = make;
    this.year = year;
    this.colour = colour;
    this.camera = camera;
  }

  ring() {
    return "Generic ring tone"
  }
}

class Iphone extends Phone {
  constructor(make, year, colour, camera, extraFeatures) {
    super(make, year, colour, camera)
    this.extraFeatures = extraFeatures
  }

  ring() {
    return "Ring ring ring. I'm an iphone"
  }
}

const genericSmartphone = new Phone("Google Pixel", 2021, "Black", "30 megapixels")

// console.log(genericSmartphone)

const iphone = new Iphone("Iphone 20", 2042, "Matte Space Grey", "1000 megapixels", ["can teleport the user", "can use VR"])

// console.log(iphone)

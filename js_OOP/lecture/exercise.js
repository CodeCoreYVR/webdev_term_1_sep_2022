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

console.log(genericSmartphone)

const iphone = new Iphone("Iphone 20", 2042, "Matte Space Grey", "1000 megapixels", ["can teleport the user", "can use VR"])

console.log(iphone)


// Make a master class for a Character
// The Character will take the parameters of name and gender

// Make a sub class for Nintendo Character
// This class should inherit from Character
// Default the company to “Nintendo”
// Add some consoles in an array the Nintendo Character appears in
// Add a method that returns “I am a character from Nintendo”

// Make another sub class for League of Legend Characters
// This class should inherit from Character
// Default the company to “Riot Games”
// Add the console as an array with “PC”
// Add a method that returns “I am a character from LoL"

// Make a sub class for Playstation Character
// This class should inherit from Character
// Default the company to "Sony"
// Add some consoles in an array the Playstation Character appears in
// Add a method that returns “I am a character from that appears in PS games"

// Make a sub class for Xbox Character
// This class should inherit from Character
// Default the company to “Microsoft”
// Add some consoles in an array the Xbox Character appears in
// Add a method that returns “I am a character from that appears in Xbox games"

// Make a master class for a Character
// The Character will take the parameters of name and gender

class Character {
  constructor(name, gender) {
    this.name = name;
    this.gender = gender;
  }
}

const mrBean = new Character("Mr Bean", "male")

console.log("...........")
console.log(mrBean)
// Make a sub class for Nintendo Character
// This class should inherit from Character
// Default the company to “Nintendo”
// Add some consoles in an array the Nintendo Character appears in
// Add a method that returns “I am a character from Nintendo”

class NintendoCharacter extends Character {
  constructor(name, gender, console) {
    super(name, gender);
    this.console = console;
    this.company = "Nintendo"
  }

  charIntro() {
    return `My name is ${this.name} and I am a Nintendo games character`
  }
}

const mario = new NintendoCharacter("Mario Mario", "Male", ["Wii, Switch, GBA, N64"])
console.log("...........")
console.log(mario)
console.log("...........")
console.log(mario.charIntro())


// Make another sub class for League of Legends Characters
// This class should inherit from Character
// Default the company to “Riot Games”
// Add the console as an array with “PC”
// Add a method that returns “I am a character from LoL"

class LeagueOfLegendsCharacter extends Character {
  constructor(name, gender) {
    super(name, gender);
    this.console = ["PC"];
    this.company = "Riot Games"
  }

  charIntro() {
    return `My name is ${this.name} and I am a character from LoL`
  }
}
console.log("...........")
const ezreal = new LeagueOfLegendsCharacter("Ezreal", "Male")
console.log(ezreal)

console.log("...........")
console.log(ezreal.charIntro())


// Make a sub class for Playstation Character
// This class should inherit from Character
// Default the company to "Sony"
// Add some consoles in an array the Playstation Character appears in
// Add a method that returns “I am a character from that appears in PS games"

class PlaystationCharacter extends Character {
  constructor(name, gender, console) {
    super(name, gender);
    this.console = console;
    this.company = "Sony"
  }

  charIntro() {
    return `My name is ${this.name} and I am a character from Playstation games`
  }
}

console.log("...........")
const crash = new PlaystationCharacter("Crazy Bandicoot", "Male", ["PS1, PS2"])
console.log(crash)

console.log("...........")
console.log(crash.charIntro())

// Make a sub class for Xbox Character
// This class should inherit from Character
// Default the company to “Microsoft”
// Add some consoles in an array the Xbox Character appears in
// Add a method that returns “I am a character from that appears in Xbox games"

class XboxCharacter extends Character {
  constructor(name, gender, console) {
    super(name, gender);
    this.console = console;
    this.company = "Microsoft"
  }

  charIntro() {
    return `My name is ${this.name} and I am a character from Xbox games`
  }
}

console.log("...........")
const masterChief = new XboxCharacter("Master Chief", "Male", ["Xbox 360", "PC"])
console.log(masterChief)

console.log("...........")
console.log(masterChief.charIntro())

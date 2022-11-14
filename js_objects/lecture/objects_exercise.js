// making a new object

let spongebob = {
  fullName: "Spongebob Squarepants",
  birthplace: "Bikini Bottom",
  address: "124 Conch Street, Bikini Bottom"
}

// adding more keys to the object

spongebob.age = 36
spongebob.likes = ["gary the snail", "jellyfishing", "working at krusty krabs"]
spongebob.likesPineapplePizza = false
spongebob["family member"] = {
  mum: "Margaret Squarepants",
  dad: "Harold Squarepants"
}

// adding number key and functionn to object (and calling them)

spongebob[29998559671349] = "spongebob's lucky number"
// console.log(spongebob["29998559671349"])


spongebob.pizza = function() {
  if (spongebob.likesPineapplePizza === true) {
    console.log("yay pineapple pizza lovers are the best!!!")
  } else {
    console.log("you should give it another chance :(")
  }
}

// using Object.getOwnPropertyNames() and Object.defineProperties()
// (adding unenumerable key)

Object.defineProperties(spongebob,{
  secret: {
    value: "he knows the secret krusty krab burger formula",
    enumerable: false
  }
})

console.log(Object.keys(spongebob)) // shows keys that are enumerable
console.log(Object.getOwnPropertyNames(spongebob)) // shows ALL keys (plus unenumerable)

// if you know the key's name, you can still view the value
console.log(spongebob.secret)

// seeing all the values
console.log(Object.values(spongebob))


///// extra

// deleting a key/value pair

delete spongebob[29998559671349]
//deleting spongebob's '29998559671349' key (his lucky number)

delete spongebob.address
// deleting spongebob's address



// for...in loop example

for (let x in spongebob) {
  console.log(x.toLocaleUpperCase(), ":", spongebob[x])
}

// prints all keys in caps, then the values as normal, with a colon symbol in between

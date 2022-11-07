// one line saying "There once was a farmer who had a dog, and Bingo was his name-o!"
console.log(`There once was a farmer who had a dog, and "Bingo"  was his name-o!`)
// rule: array used must be ["B","I","N","G","O"]
let bingo = ["B", "I", "N", "G", "O"]

// figure out how to repeat the array once first, each item on one line

// while version
// let j = 0
// while (j < 3){ // repeat "B, I, N, G, O" 3 times on seperate lines
//   for (let i = 0; i < bingo.length; i++) {
//     console.log(bingo[i])
//   }
//   j++
// }

// for version
for (let j = 0; j < 3; j++) { // repeat "B, I, N, G, O" 3 times on seperate lines
  for (let i = 0; i < bingo.length; i++) {
    console.log(bingo[i])
  }
}

// one line saying "and bingo was his name-o!"
console.log("and Bingo was his name-o!")

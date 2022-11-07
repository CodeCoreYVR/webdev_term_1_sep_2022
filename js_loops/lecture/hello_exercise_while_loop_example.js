// need to make counter (for the o's)
let counter = 0

// MAke a loop where the "hello" should repeat but get longer
while (counter < 5) {
  let o = "o".repeat(counter)
  // the counter in repeat will make the string "o" longer each time it's looped

  // Need to console.log the conversation's "hello's" in the loop 5 times
  console.log(`Me: hello${o}`)
  // o variable is interpolated to add onto the end of "hello" string to make it longer

  // add an increment so loop isn't infinite
  counter++
}
// Then, console.log caps "HELLO" in caps (this needs to be out of the loop, as it's different from the other "hello's")
console.log("Me: HELLOOOOOOO!!! CAN'T YOU HEAR ME?!")
// Console.log friend's response
console.log("Friend: Oh sorry...I couldn't hear you!")

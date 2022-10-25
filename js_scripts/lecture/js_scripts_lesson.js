// Aim: To use simple programming lingo to see if students understand the exercises.

// Bio Exercise

// 1. Code this in your js file
// 2. Make three variables that are all strings. Each string is a piece of information about yourself
// 3. Use the addition operator to combine the three strings together.
// 4. console.log these three strings
// 5. Note! Make sure the spacing and punctuation is nice :)

// Answer for Bio Exercise below

// 1. Code this in your js file (done, already in it!)

// 2. Make three variables that are all strings. Each string is a piece of information about yourself

// My intro
let intro = "Hello my name is Chingyee"
let height = "I am 155cm tall"
let home = "I am from the UK"

// Intro for a friend
let friendsName = "I have a friend called Sisi. "
let friendsJob = "She is a psychologist."
let friendsLikes = " She really likes the boyband BTS! (Like a lot!!!)"

// 3. Use the addition operator to combine the three strings together.
// it will look something like this => (intro + height + home)

// 4. console.log these three strings
console.log(intro + height + home)

// 5. Note! Make sure the spacing and punctuation is nice :)

// console.logging for myself (no punctuation and spacing in string variables)
console.log(intro + ". " + height + ". " + home + ". ")

//console.logging for a friend (punctuation and spacing in the string variables)
console.log(friendsName + friendsJob + friendsLikes)

////////////////////////////////////

// Repetition task

// 1. Define a variable that is a string.
// 2. Make it repeat using an operator.
// 3. console.log the results. What does it print?

// 1. Define a variable that is a string.
let sentence = "I am a Parrot. "

// 2. Make it repeat using an operator.
// It will look something like this => (sentence * 3)

// 3. console.log the results. What does it return
console.log(sentence * 3)
// Prints "NaN"

// Note: We get NaN because you can't multiply strings. You would need a method in order to do this. In this case, .repeat() is needed
console.log(sentence.repeat(3)) // Will repeat sentence 3 times

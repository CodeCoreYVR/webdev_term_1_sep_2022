let arg1 = process.argv[2]
let arg2 = process.argv[3]
const user = "John Smith";
const password = "suPers3cret#";

let userSame = arg1.toLocaleLowerCase() == user.toLocaleLowerCase();
let passSame = arg2 === password;

if (userSame && passSame) {
  console.log("User exists!\nPassword correct, you are now logged in")
} else if (userSame && !passSame) {
  console.log("User exists!\nWrong password, access denied!")
} else if (!userSame) {
  console.log("User does not exist!")
} else {
  console.log("Incorrect input! Please try something like:\n$ node passwordChecker.js \"User Name\" password")
}


// [Lab] Password Checker
// Opened: Sunday, 16 October 2022, 12:00 AM

// Write a script passwordChecker.js which takes in two argument strings. 

// First argument:
// If the first string matches user = 'John Smith';(lower case should be allowed to work too), then log "User exists!", if it doesn't match log "User does not exist!".

// Second argument: 
// If the second string matches password = "suPers3cret#"; then log to the console "Password correct!", if it doesn't match password but user exists log "Wrong password, access denied!".

// Your file should contain:

// const user = 'John Smith';
// let password = "suPers3cret#";


// Terminal output:

//   $ node passwordChecker.js "Jon Smith" password
//   Returns >> "User does not exist!"

//   $ node passwordChecker.js "john smith" supers3cret# 
//   Returns >> "User exists!"
//              "Wrong password, access denied!"

//   $ node passwordChecker.js "john Smith" suPers3cret#
//   Returns >> "User exists!"
//              "Password correct, you are now logged in"


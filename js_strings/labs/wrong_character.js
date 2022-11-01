const a = process.argv[2];
const r = a[0];

console.log(r)


// [Lab] Wrong Character
// Opens: Wednesday, 9 November 2022, 12:00 AM

// Find the bug and fix it.

// This firstCharacter.js script should print out the first character of a given 
// rgument. But it's doing the following:
  
//   $ node firstCharacter.js hellllo >> Returns >> undefined
  
// It should do:

//   $ node firstCharacter.js hellllo >> Returns >> h
    
//   const a = process.argv[1];
//   const r = a[1];
  

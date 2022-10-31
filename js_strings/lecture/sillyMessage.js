// Change "hELlo THERE, hOW ARE yOu doINg?" to not look silly

// 1. put the sentence in a variable
let sentence = "hELlo THERE, hOW ARE yOu doINg?"

// 2. seperate the "h" (and put in a variable)
let h = sentence[0]

// 3. seperate the rest of the string and lower case it
let restOfString = sentence.slice(1).toLowerCase();

// 4. uppercase the "h" variable
h = h.toUpperCase();

console.log(h + restOfString)

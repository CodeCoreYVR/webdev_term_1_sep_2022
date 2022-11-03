let arg1 = process.argv[2];

if (arg1) {
  let arg1Lower = arg1.toLocaleLowerCase();
  let yesOrNo = arg1Lower.startsWith('lord') || arg1Lower.startsWith('lady');

  if (yesOrNo) {
    console.log(arg1 + " is a landowner");
  } else {
    console.log(arg1 + " is not a landowner");
  }
} else {
  console.log('Incorrect input. Please enter something like:\n$ node landlord.js \"Lady Goodwin\"');
}




// [Lab] Landlord
// Opened: Sunday, 16 October 2022, 12:00 AM

// Write a script landlord.js which takes in an argument string. If 
// the string starts with capitalized "Lord" / "Lady" or lowercase 
// "lord" / "lady" then it should log to the console 
// "string" + " is a landowner", otherwise "string" + " is not a landowner".

//   $ node landlord.js "Lord Alexander" >> Returns >> Lord Alexander is a landowner

//   $ node landlord.js duke >> Returns >> duke is not a landowner



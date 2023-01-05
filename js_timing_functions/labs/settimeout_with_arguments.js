const myName = (firstName, surname) => {
  console.log(firstName, surname);
}

setTimeout(myName, 2000, 'Caleb', 'Faulhaber')
// -------------------- Or --------------------
const setTimeoutArgs = (firstName, surname) => {
  const name = () => {
    console.log(firstName, surname);
  }
  setTimeout(name, 2000);
}

setTimeoutArgs('Caleb2', 'Faulhaber2')
// -------------------- End -------------------



// [Lab] setTimeout with Arguments

// Use setTimeout to print arguments passed by the user e.g. name. It should be printed after 2 seconds.
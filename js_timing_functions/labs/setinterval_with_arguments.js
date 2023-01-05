let timer = setInterval((firstName, surname) => {
  console.log(`${surname}, ${firstName}`);
}, 1000, 'Caleb', 'Faulhaber')

setTimeout(() => {
  clearInterval(timer)
}, 10000)
// -------------------- Or --------------------
const setTimeoutArgs = (firstName, surname) => {
  const printTimer = setInterval(() => {
    console.log(`${surname}, ${firstName}`);
  }, 1000)
  setTimeout(() => {
    clearInterval(printTimer)
  }, 10000)
}

setTimeoutArgs('Caleb2', 'Faulhaber2');
// -------------------- End -------------------



// [Lab] setInterval() with Arguments

// Use setInterval to print name from as an argument from the user, It should 
// print name every 1 sec and stop print names after 10 sec.
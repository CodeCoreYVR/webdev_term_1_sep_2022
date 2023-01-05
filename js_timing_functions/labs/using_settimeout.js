const myName = () => {
  console.log('Caleb')
}

const usingSetTimeout = () => {
  for (let i = 1; i <= 10; i++) {
    setTimeout(myName, 2000)
  }
}

usingSetTimeout()


// Assignment
// [Lab] Using setTimeout()


// Write a function using setTimeout that prints your name 10 times after 2 seconds each
const usingSetInterval = () => {
  let x = 7000;
  let timer = setInterval(() => {
    console.log('Caleb');
  }, 1000);

  setTimeout(() => {
    clearInterval(timer);
  }, x);
}

usingSetInterval()




// [Lab] Using setInterval()

// Using setInterval(), keep printing your name 1 time per second, until it reaches x seconds. 

// let x=7.
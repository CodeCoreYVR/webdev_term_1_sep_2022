// // New years message exercise

// alert("Happy New Year!")

// function secondMessage(){
//   alert("Hope you enjoyed the holiday!!")
// }

// setTimeout(secondMessage, 3000)

// function thirdMessage(){
//   alert("May this year be better than the last!!!")
// }

// setTimeout(thirdMessage, 6000)

// Start and Cancel Button Exercise

const startTimer = document.querySelector('#timerStart')
const endTimer = document.querySelector('#timerEnd')

function startClick() { alert("The start buttton has been clicked") }
function cancelClick() { alert("The cancel button has been clicked") }

startTimer.addEventListener("click", startClick)
endTimer.addEventListener("click", cancelClick)

// This was works too
// startTimer.addEventListener('click', function(){alert("The start timer has been clicked")})
// endTimer.addEventListener('click', function(){alert("The timer has been cancelled")})

// Delayed Button Example

const delayedButton = document.querySelector('#delayedButton')

function delayedAlert(){
  alert("This button was clicked 5 seconds ago")
}

delayedButton.addEventListener('click', function(){setTimeout(delayedAlert, 5000)})

// Pizza Exercise (Part 1)

// const startPizza = document.querySelector("#startPizza")
// const stopPizza = document.querySelector("#stopPizza")

// let timerID = 0

// function startCookingPizza(){
//   alert("You have started cooking your pizza!")
//   timerID = setTimeout(() => {
//     alert("Your pizza is ready, don't forget to take it out!")
//   }, 5000);
// }

// function takeOutPizza(){
//   clearTimeout(timerID)
//   alert("You have taken out your pizza. Hope it's cooked properly :)")
// }

// startPizza.addEventListener("click", startCookingPizza)
// stopPizza.addEventListener("click", takeOutPizza)

// Pizza Exercise (Part 2 - alerting for when there is no pizza in the oven)

const startPizza = document.querySelector("#startPizza")
const stopPizza = document.querySelector("#stopPizza")

let timerID = 0
let startClicked = false

function startCookingPizza() {
  startClicked = true
  alert("You have started cooking your pizza!")
  timerID = setTimeout(() => {
    alert("Your pizza is ready, don't forget to take it out!")
    startClicked = false
  }, 5000);
}

function takeOutPizza() {
  if (startClicked === false){
    alert("There is nothing in the oven...")
  } else {
    clearTimeout(timerID)
    startClicked = false
    alert("You have taken out your pizza. Hope it's cooked properly :)")
  }
}

startPizza.addEventListener("click", startCookingPizza)
stopPizza.addEventListener("click", takeOutPizza)

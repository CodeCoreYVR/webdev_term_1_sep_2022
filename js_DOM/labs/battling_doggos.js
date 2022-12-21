function randomIntFromInterval(min, max) { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min)
}

let selectedDoggos = []

function getTeamName(doggo) {
  return doggo.parentNode.parentNode.className;
}
function getDoggoName(doggo) {
  return doggo.getElementsByTagName("h1")[0].textContent
}


document.querySelectorAll(".doggo.fighter").forEach(doggo => {
  doggo.addEventListener("click", e => {
      selectedDoggos.push(doggo);
      if(selectedDoggos.length > 1) {
          if(getTeamName(selectedDoggos[0]) !== getTeamName(selectedDoggos[1])) {
              let selectedDoggoName = getDoggoName(selectedDoggos[0]);
              let opponentName = getDoggoName(selectedDoggos[1]);;
              let sure = window.prompt(selectedDoggoName + " is picking a fight with " + opponentName + ". Are you sure?");
              if(sure && sure.toLocaleLowerCase() === "sure") {
                  let winner = randomIntFromInterval(1,2) === 1 ? selectedDoggoName : opponentName;
                  new Audio("./sounds/applause_y.wav").play();
                  alert("The winner is " + winner);
              }
          }
          selectedDoggos.shift();
      }
  })
})

document.body.addEventListener('click', event => {
const { target } = event;
if (!target.closest('.team')) selectedDoggos = [];
});




// --------------------------------------------------------------------------
// [Lab] Battling Doggos

// This lab follows up on [Lab] Selecting Doggos.
//   1.  With a .doggo.fighter selected, clicking a .doggo.fighter of an opposing 
//       team prompts the user,  <selected-doggo-name> is picking a fight with 
//       <doggo-name>. Are you sure?. (Make sure to replace the doggo names 
//       appropriately.) Look up the promp function to do this.
//   2.  If prompted user is sure, have the .doggo.fighters battle. Use an 
//       arbitrary algorithm to decide which .doggo.fighter wins.
//   3.  Show the winning doggo in an annoying popup and play a victory sound.



// the only cards we will be taking are: ace, 2, 3, 4, 5, 6, 7, 8, 9, 10, jack, queen, king
// picure cards are 10 points
// Other cards are just equal to there number
// Aces is 11. If there's double ace, they will be 12 (11 + 1)
// THERE IS NO NUMBER 1 CARD (that is an ace)

const blackjack = function (card1, card2) {
  let points = 0

  // jack, queen, king are 10 points

  if (card1 === "jack" || card1 === "queen" || card1 === "king") {
    card1 = 10
  } else {
    card1
  }

  if (card2 === "jack" || card2 === "queen" || card2 === "king") {
    card2 = 10
  } else {
    card2
  }

  if ((card1 === "ace" && card2 === 10) || (card2 === "ace" && card1 === 10)) {
    console.log("BLACKJACK!!!")
    // to win, get 21 points (that is a "blackjack")
  } else if (card1 === "ace" && card2 === "ace") {
    console.log("You have 2 aces, which means you have 12 points. Would you like to draw again?")
    //(unless you get 2 aces. one will be 11, one will be 1. So the total is 12)
  } else if (card1 === "ace" && card2 < 10) { // ace is 11 points
    card1 = 11
    points = card1 + card2
    console.log(`You have ${points} points. Would you like to draw again?`)
  } else if (card2 === "ace" && card1 < 10) { // ace is 11 points
    card2 = 11
    points = card1 + card2
    console.log(`You have ${points} points. Would you like to draw again?`)
  } else { // other cards are just equal to there number
    points = card1 + card2
    console.log(`You have ${points} points. Would you like to draw again?`)
    // anything else, total the points and ask the player if the wanna draw
  }

}

// blackjack(10, 10)

// another example (not so DRY)

// const blackjack = function (card1, card2) {
//   if (card1 === 'ace' && card2 === 'ace') {
//     console.log("You have 12 points, would you like to draw again?");
//   } else if (
//     (card1 === 'jack' && card2 === 'ace') ||
//     (card1 === 'ace' && card2 === 'jack') ||
//     (card1 === 'queen' && card2 === 'ace') ||
//     (card1 === 'ace' && card2 === 'queen') ||
//     (card1 === 'king' && card2 === 'ace') ||
//     (card1 === 'ace' && card2 === 'king') ||
//     (card1 === 'ace' && card2 == 10) ||
//     (card1 == 10 && card2 === 'ace')
//   ) {
//     console.log('You got 21 points, so You win!');
//   } else if (
//     (card1 === 'jack' && card2 === 'jack') ||
//     (card1 === 'jack' && card2 === 'queen') ||
//     (card1 === 'jack' && card2 === 'king') ||
//     (card1 === 'queen' && card2 === 'jack') ||
//     (card1 === 'queen' && card2 === 'queen') ||
//     (card1 === 'queen' && card2 === 'king') ||
//     (card1 === 'king' && card2 === 'jack') ||
//     (card1 === 'king' && card2 === 'queen') ||
//     (card1 === 'king' && card2 === 'king')
//   ) {
//     console.log('You got 20 points. Do you want to draw again?');
//   } else if (card1 === 'ace' && card2 === 'ace') {
//     console.log("You have 2 'aces', so you got 12 points!");
//   } else if (
//     (card1 === 'ace' && card2 == 2) ||
//     (card1 === 'ace' && card2 == 3) ||
//     (card1 === 'ace' && card2 == 4) ||
//     (card1 === 'ace' && card2 == 5) ||
//     (card1 === 'ace' && card2 == 6) ||
//     (card1 === 'ace' && card2 == 7) ||
//     (card1 === 'ace' && card2 == 8) ||
//     (card1 === 'ace' && card2 == 9)
//   ) {
//     console.log(
//       `You got ${11 + Number(card2)} points. Do you want to draw again?`
//     );
//   } else if (
//     (card2 === 'ace' && card1 == 2) ||
//     (card2 === 'ace' && card1 == 3) ||
//     (card2 === 'ace' && card1 == 4) ||
//     (card2 === 'ace' && card1 == 5) ||
//     (card2 === 'ace' && card1 == 6) ||
//     (card2 === 'ace' && card1 == 7) ||
//     (card2 === 'ace' && card1 == 8) ||
//     (card2 === 'ace' && card1 == 9)
//   ) {
//     console.log(
//       `You got ${11 + Number(card1)} points. Do you want to draw again?`
//     );
//   } else {
//     console.log(
//       `You got ${Number(card1) + Number(card2)
//       } points. Do you want to draw again?`
//     );
//   }
// };

// blackjack("ace", "10")

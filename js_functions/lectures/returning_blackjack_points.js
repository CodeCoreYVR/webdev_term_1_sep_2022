let points = 0
const blackjack = function (card1, card2) {
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

  if ((card1 === "ace" && card2 == 10) || (card2 === "ace" && card1 == 10)) {
    console.log("BLACKJACK!")
    return points = 21
  } else if (card1 === "ace" && card2 === "ace") {
    console.log(`You have 2 aces which is currently 12 points. Would you like to draw again?`)
    return points = 12
  } else if (card1 === "ace" && card2 < 10) {
    card1 = 11
    points = card1 + card2
    console.log(`You have ${points} points. Would you like to draw again?`)
    return points
  } else if (card2 === "ace" && card1 < 10) {
    card2 = 11
    points = card1 + card2
    console.log(`You have ${points} points. Would you like to draw again?`)
    return points
  } else {
    points = card1 + card2
    console.log(`You have ${points} points. Would you like to draw again?`)
    return points
  }

}
blackjack("jack", "ace")
console.log(points)

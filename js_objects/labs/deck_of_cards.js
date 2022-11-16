const cards = () => {
  cardsArr = [];
  vals = ['A','2','3','4','5','6','7',
          '8','9','10','J','Q','K'];
  suits = ['Spades', 'Hearts', 'Diamonds', 'Clubs'];
  for (let i = 0; i < suits.length; i++) {
    for (let j = 0; j < vals.length; j++) {
      cardsArr.push({'suit': suits[i], 'val': vals[j]})
    }
  }
  // lines 6 - 10 have the same output as lines 12 - 16.
  // for (let suit of suits) {
  //   for (let val of vals) {
  //     cardsArr.push({suit, val})
  //   }
  // }
  return cardsArr;
} 

const deck = {
  cards: cards(),
  shuffle: function() {
      let remainingCards = [...this.cards]; // this just creates a new array containing all the current values of deck.cards
      shuffledCards = [];
      for (let i = remainingCards.length-1; i >= 0; i--) { // this is a way to truely randomly shuffle rather than do a bad shuffle
          let random = Math.floor(Math.random() * (i + 1)); // making a random number between 0 and length of remainingCards.
          shuffledCards.push(remainingCards[random]); // pushing remainingCards with index of random, into the new shuffledCards array.
          remainingCards.splice(random,1); // removing only the card at index of random number from the remainingCards.
      };
      return this.cards = shuffledCards; // this.cards same as deck.cards making it equal to the newly shuffledCards.
  },
  draw: function() {
      this.cards.shift() // this.cards is same as deck.cards we are just removing the top card or \'drawing\' the top card.
  },
  reset: function() {
      this.cards = cards() // this.cards same as deck.cards we arejust creating a whole new deck.
  }
}

deck.shuffle()
console.log(`------- Start New Shuffled Deck -------`)
console.log(deck.cards);
console.log(`-------- End New Shuffled Deck --------`)
console.log(`---------------------------------------`)
deck.draw()
deck.draw()
deck.draw();
console.log(`---------- Start Cards Drawn ----------`)
console.log(deck.cards);
console.log(`----------- End Cards Drawn -----------`)
console.log(`---------------------------------------`)
deck.reset();
console.log(`----------- Start Reset Deck ----------`)
console.log(deck.cards);
console.log(`------------ End Reset Deck -----------`)
console.log(`---------------------------------------`)
deck.shuffle();
console.log(`--------- Start Shuffled Deck ---------`)
console.log(deck.cards);
console.log(`---------- End Shuffled Deck ----------`)
console.log(`---------------------------------------`)







// [Lab] Deck of Cards
// Opened: Friday, 4 November 2022, 1:00 AM

// Create an object that represents a deck of playing cards.

// It will have a property cards that contains an array of all 52 cards 
// including all clubs, spades, hearts and diamonds. Use a loop to 
// generate the cards instead of adding each manually. The cards should 
// be represented as an object with the properties: suit & number.

// Example Deck with a few Cards:

// const deck = {
//   cards: [
//     { suit: "hearts", number: 1 },
//     { suit: "spades", number: 10 },
//     ...
//   ]
// }

// Additionally, add the following methods to the deck:
// - shuffle will randomly reorder the cards in the deck.
// - draw will remove and return the top card of the deck.
// - reset method which resets deck to all 52 cards.
const Card = function(value, suit) {
  this.value = value;   
  this.suit = suit;
  
  if (value == 1) {
    this.value = 'Ace';
  } else if (value == 11) {
    this.value = 'Jack';
  } else if (value == 12) {
    this.value = 'Queen';
  } else if (value == 13) {
    this.value = 'King';
  };

  toString = () => {
      return `\'Card { ${this.value} of ${this.suit} }\'`;
  };
  return toString();
}


const Deck = function() {
  this.cards = [];
  
  this.reset = function() {
    let suits = ['Spades', 'Diamonds', 'Hearts', 'Clubs'];
    this.cards = [];
    for (let suit of suits) {
      for (let n = 1; n <= 13; n++) {
        this.cards.push(new Card(n, suit));
      }
    };
    return this;
  };
  this.reset();

  this.shuffle = function() {
    let remainingCards = [...this.cards];
    let shuffledCards = [];
    for (let i = remainingCards.length-1; i >= 0; i--) {
      let random = Math.floor(Math.random() * (i + 1));
      shuffledCards.push(remainingCards[random]);
      remainingCards.splice(random,1);
    };
    this.cards = shuffledCards;
    return this;
  ;}

  this.draw = function() {
    this.cards.pop()
    return this;
  };

  this.look = function() {
    return this.cards;
  };
};


let myDeck = new Deck;

myDeck.draw().shuffle().draw().reset().draw()
console.log(myDeck.look());

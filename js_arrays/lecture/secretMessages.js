// secret message 1.0 exercise (only one array)

// ayaka's message
// let secretMessage = [
//   'seems',
//   'energy',
//   'and',
//   'this',
//   'outside',
//   'great',
//   "let's",
//   'weather',
//   'week',
//   'go',
//   'having',
//   'get',
// ];

// secretMessage = [
//   secretMessage[3],
//   secretMessage[8],
//   secretMessage[0],
//   secretMessage[10],
//   secretMessage[5],
//   secretMessage[7],
//   secretMessage[6],
//   secretMessage[9],
//   secretMessage[4],
//   secretMessage[2],
//   secretMessage[11],
//   secretMessage[1],
// ];

// console.log(secretMessage)

// Hooman's message

// let secretMessage = ['to', 'want', 'because', 'it\'s', 'boring', 'school', 'go', 'to', 'don\'t', 'I']

// let decodeMessage = [secretMessage[9], secretMessage[8], secretMessage[1], secretMessage[7], secretMessage[6], secretMessage[0], secretMessage[5], secretMessage[2], secretMessage[3], secretMessage[4]];

// console.log(decodeMessage);

// Keerat's message
// let secretMessage = ["watch", "black adam", "let", "rock", "movies", "new", "on", "sunday", "at", "10 am"]

// let decodesMessage = [secretMessage[2], secretMessage[0], secretMessage[3], secretMessage[5], secretMessage[4], secretMessage[1], secretMessage[6], secretMessage[7], secretMessage[8], secretMessage[9]]

// console.log(decodesMessage)

// Ron's message

// secretMessage = ["yet", "whale", "on", "a", "put", "the", "have", "moon", "dog", "or", "to", "we"];

// decodedMessage = [secretMessage[11], secretMessage[6], secretMessage[0], secretMessage[10], secretMessage[4], secretMessage[3], secretMessage[1], secretMessage[9], secretMessage[8], secretMessage[2], secretMessage[5], secretMessage[7]]

// console.log(decodedMessage)

// secret message 2.0 exercise (array-ception)

// Ayaka's

// let secretMessage2 = [
//   ['hello', 'this', 'congrats'],
//   ['week', 'today', 'apple'],
//   ['is', 'last', 'lunch'],
//   ['lion', 'lemon', 'class'],
//   ['the', 'at', 'visit'],
//   ['with', 'of', 'his'],
// ];

// let decodedMessage = [
//   [secretMessage2[0][1]],
//   [secretMessage2[2][0]],
//   [secretMessage2[4][0]],
//   [secretMessage2[2][1]],
//   [secretMessage2[3][2]],
//   [secretMessage2[5][1]],
//   [secretMessage2[0][1]],
//   [secretMessage2[1][0]],
// ];
// console.log(decodedMessage);

// Hooman's

// const array = [['driver', 'capitan', 'pilot'], ['wants', 'doesn`t want', 'want'], ['was', 'were', 'be'], ['not to', 'to', 'or'], ['a', 'an', 'even'], ['He', 'I', 'she']];

// let secretMessage = [array[5][1], array[1][2], array[3][1], array[2][2], array[4][0], array[0][2]];
// console.log(secretMessage)

// Keerat's

// let array = [["I ", "hate", "to"], ["like ", "watching", "drama"], ["lion", "movies", "spider"], ["action", "comedy", "freetime"], ["in", "my", "and"]]

// let decode = [array[0][0], array[1][0], array[1][1], array[3][0], array[4][2], array[3][1], array[2][1]]
// console.log(decode)

// Ron's

// message = [["was", "to", "on"], ["class", "exercise", "most"], ["instructed", "the", "work"], ["superfluous", "a"]];

// decodedMessage = [message[2][1], message[1][0], message[0][0], message[2][0], message[0][1], message[2][2], message[0][2], message[3][1],
// message[1][2], message[3][0], message[1][1]];

// console.log(decodedMessage)

// extra example

message = [["water", "mango", "really"], ["i", "hate", "to"], ["to", "swim", "with"], ["in", "like", "cold"], ["smoothies", "movies", "panda"], ["snowboard", "spiders", "drink"]]

decodedMessage = [message[1][0], message[3][1], message[2][0], message[5][2], message[0][1], message[4][0]]

console.log(message[0].length)

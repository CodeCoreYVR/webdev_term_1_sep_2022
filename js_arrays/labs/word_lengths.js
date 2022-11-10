// ************************** simpler ************************** 
function wordLengths(sentence) {
  let wordArr = String(sentence).split(' ');
  
  for (let i = 0; i < wordArr.length; i++) {
    console.log(`${wordArr[i]} has ${wordArr[i].length} characters`);
  }
}
// *********************** more practical ********************** 
function wordLengths2(sentence) {
  let wordArr = String(sentence).split(' ');
  let answerStr = '';

  for (let i = 0; i < wordArr.length; i++) {
    if (i + 1 === wordArr.length) {
      answerStr += `${wordArr[i]} has ${wordArr[i].length} characters`;
    } else {
      answerStr += `${wordArr[i]} has ${wordArr[i].length} characters\n`;
    }
  }

  return answerStr;
}
// **************************** end **************************** 

console.log('*************** first method ****************')
wordLengths('Hello Universe');
console.log('*************** second method ***************')
console.log(wordLengths2('Hello Other Universe'));
wordLengths2('Hello Other Universe');



// [Lab] Word Lengths
// Opened: Friday, 28 October 2022, 1:00 AM

// Write a function, wordLengths, that takes a sentence and prints every 
// word in the sentence and its length.

// wordLengths("Hello Universe")
// // > "Hello has 5 characters."
// // > "Universe has 8 characters."



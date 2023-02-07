let string = "sun moon moon sun",
  string2 = "apple apple banana pear banana",
  string3 = "a a a apple banana banana pineapple";

const destroyConsecutive = str => {
  let words = str.split(' '),
    i = 0;

  while (i < words.length) {
    words[i] === words[i + 1] ? words.splice(i,2) && (i = 0) : i++;
    // if (words[i] === words[i + 1]) {
    //   words.splice(i, 2);
    //   i = 0;
    // } else {
    //   i++;
    // }
  }
  return words.join(' ');
}

console.log(destroyConsecutive(string))
console.log(destroyConsecutive(string2))
console.log(destroyConsecutive(string3))



// [Lab] Destroy consecutive words

// Write a function that accepts a sentence.

// It will check if any two same words follow each other, if they destroy each other.
// Output the remaining undestroyed string.

// destroyConsecutive("sun moon moon sun"); // ""
// destroyConsecutive("apple apple banana pear banana"); // "banana pear banana"
// destroyConsecutive("a a a apple banana banana pineapple"); // "a apple pineapple"

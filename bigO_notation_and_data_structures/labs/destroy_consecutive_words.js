// Define the input strings for testing the destroyConsecutive function
let string = "sun moon moon sun",
    string2 = "apple apple banana pear banana",
    string3 = "a a a apple banana banana pineapple";

// Define a function to remove consecutive words from a string
const destroyConsecutive = (str) => {
  // Split the string into an array of words
	let words = str.split(" "),
		i = 0;


  // Loop through the array of words
	while (i < words.length) {
    // Check if the current word is the same as the next word
		words[i] === words[i + 1] ? words.splice(i, 2) && (i = 0) : i++;
    
    // // Alternative solution:
    // // Check if the current word is the same as the next word
    // if (words[i] === words[i + 1]) {
    // // If so, remove both words from the array and reset the index to the beginning
		//   words.splice(i, 2);
		//   i = 0;
		// } else {
    //   // If not, move on to the next word
		//   i++;
		// }
	}

  // Combine the remaining words into a string separated by spaces
	return words.join(" ");
};

// Call the destroyConsecutive function with each input string and log the results to the console
console.log(destroyConsecutive(string));
console.log(destroyConsecutive(string2));
console.log(destroyConsecutive(string3));




// [Lab] Destroy consecutive words

// Write a function that accepts a sentence.

// It will check if any two same words follow each other, if they destroy each other.
// Output the remaining undestroyed string.

// destroyConsecutive("sun moon moon sun"); // ""
// destroyConsecutive("apple apple banana pear banana"); // "banana pear banana"
// destroyConsecutive("a a a apple banana banana pineapple"); // "a apple pineapple"

const string = "({},[], (), \"\", '')",
	string2 = "({, [}], (, \"\", '')";

const balanced = (str) => {
	const brackets = "{}[]()",
		quotes = "\"'",
		stack = [];

	for (let i = 0; i < str.length; i++) {
    if (stack[0] === str[i]) {
      stack.shift();
    } else if (brackets.includes(str[i])) {
      let symInd = brackets.indexOf(str[i]);

			if (symInd % 2 === 0) {
				stack.unshift(brackets[symInd + 1]);
      } else {
        return false;
      }
		} else if (quotes.includes(str[i])) {
      stack.unshift(quotes[quotes.indexOf(str[i])])
    }
	}

	return true;
};

console.log(`balanced(${string}) // Returns ~> `, balanced(string));
console.log(`***** string2 *****`);
console.log(`balanced(${string2}) // Returns ~> `, balanced(string2));




// [Lab] Check if Even

// Given a string containing special characters ({}, [], (), "", ''),
// check if it's even and balanced or not.

const string = 'Duplicated parenthesis ({[]})',
	string2 = 'Duplicated parenthesis ({[({[]})]})';

const dupParenth = (str) => {
	const brackets = "{[(",
    stack = [];

  for (l of str) {
    if (stack.includes(l)) {
      return true;
    } else if (brackets.includes(l)) {
      stack.push(l)
    }
  }

  return false;
}

console.log(`dupParenth("${string}") // Returns ~> `, dupParenth(string))
console.log(`dupParenth("${string2}") // Returns ~> `, dupParenth(string2))

// [lab] Find Duplicated Parenthesis

// Given a balanced string that can contain opening and closing parenthesis, 
// check if the string contains any duplicated parenthesis or not.
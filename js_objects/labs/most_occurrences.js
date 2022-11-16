const mostOccurences = function(arr) {
  let most = [];
  let counter;

  for (let i = 0; i < arr.length; i++) {
    counter = 1; // this resets counter back to 1 for each outer loop

    for (let j = i + 1; j < arr.length; j++) { 
      if (arr[i] === arr[j]) { // compares every value after index of i to see if it's the same as arr[i]
        counter++; // if so it adds 1 to the counter
      }
    }

    if (!most[0]) { // if no value has been added to most array then current(this would happen on the first iteration) value of arr[i] and counter will be pushed in.
      most.push(arr[i]);
      most.push(counter);
    } else if (counter > most[1]) { // if counter is higher than courrent highest which is saved as most[1] then it will overwrite most with arr[i] and counter. 
      most[0] = arr[i];
      most[1] = counter;
    }
  }

  console.log(`most: [${most}]`) // this is strictly for developer to see what's happening.
  console.log(`most[0]: ${most[0]}`) // this is strictly for developer to see what's happening.
  console.log(most[0])
  return most[0]; // this is the return value asked for in the lab.
}

mostOccurences(['a', 'b', 'b', 'c', 'd', 'd', 'e', 'e', 'e'])




// [Lab] Most Occurrences
// Opened: Thursday, 24 February 2022, 12:00 AM
// Due: Thursday, 3 March 2022, 12:00 AM

// Write a function that accepts an array of letters. It will return the letter 
// that occurs the most amount of time.

// examples

// mostOccurences(['a', 'b', 'b', 'c', 'd', 'd', 'e', 'e', 'e']); // returns 'e'


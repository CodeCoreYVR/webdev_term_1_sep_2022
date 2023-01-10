let people = [
  {
    name: 'john stevenson',
    age: 25
  },
  {
    name: 'jane smith',
    age: 30
  },
  {
    name: 'bob robertson',
    age: 20
  }
]


const happyBirthday = (arr) => {
  let newPeople = new Array();
  for (let person of arr) {
    newPeople.push({...person})
  }
  for (let person of newPeople) {
    person.age++;
  }
  return newPeople;
}

console.log(happyBirthday(people))
console.log(people)



// [Lab] Getting Older

// Write a function happyBirthday that accepts an array of people objects. 
// It will increase the age of all the people without mutating the original 
// objects
const obj = {
  person: {
    name: 'joe',
    history: {
      hometown: 'bratislava',
      bio: {
        funFact: 'I like fishing.'
      }
    }
  },
};

Object.prototype.getByPath = function(string) {
  let keyArray = string.split('.');
  let result = this;

  for(key of keyArray) {
    if (result[key] === undefined) {
      return result[key];
    }  else {
      result = result[key];
    }
  }

  return result;
}

// --------------------- More Difficult ---------------------
// Take a look and see if you can figure out what's going on.
Object.prototype.getByPath2 = function(string) {
  return string.split('.').reduce((result = this, key) => result[key], this);
}
// --------------------------- End --------------------------


console.log('---------------------- Lab Solution ----------------------');
console.log(    obj.getByPath2('person.name')                           ); // 'joe'
console.log(    obj.getByPath2('person.history.bio')                    ); // { funFact: 'I like fishing.' } 
console.log(    obj.getByPath2('person.history.homeStreet')             ); // undefined 
console.log(    obj.getByPath2('person.animal.pet.needNoseAntEater')    ); // undefined 
console.log('--------------------- More Difficult ---------------------')
console.log(    obj.getByPath2('person.name')                           ); // 'joe'
console.log(    obj.getByPath2('person.history.bio')                    ); // { funFact: 'I like fishing.' } 
console.log(    obj.getByPath2('person.history.homeStreet')             ); // undefined 
console.log(    obj.getByPath2('person.animal.pet.needNoseAntEater')    ); // undefined 
console.log('--------------------------- End --------------------------')


// Get Object Property By Path
// You are given a complex object that has many deeply nested variables. 
// Create a prototype method on Object, Object.getByPath, that takes a 
// period separated string and traverses the nested object. It returns 
// undefined if it encounters an undefined value at any time.

// const obj = {
//   person: {
//     name: 'joe',
//     history: {
//       hometown: 'bratislava',
//       bio: {
//         funFact: 'I like fishing.'
//       }
//     }
//   }
// };

// gets value of name in value of person in obj 
// obj.getByPath('person.name'); // 'joe'

// gets value of bio in value of history in value of person in obj 
// obj.getByPath('person.history.bio'); // { funFact: 'I like fishing.' }

// homeStreet doesn't exist, then return undefined 
// obj.getByPath('person.history.homeStreet'); // undefined

// animal doesn't exist, then return undefined 
// obj.getByPath('person.animal.pet.needNoseAntEater'); // undefined

// Adapted from [Extract Nested Object Reference Kata.]
// (https://www.codewars.com/kata/extract-nested-object-reference) 
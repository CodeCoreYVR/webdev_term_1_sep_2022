// pass by array - pure version

const array2 = [6,7,8,9,10]

function doubleAllPure(array){
  return array.map(i => i*2)
}

console.log(doubleAllPure(array2))
console.log(array2)


// doubleAll Pure function with spread operator

const array3 = [11,12,13,14,15]

function spreadDoubleAll(array){
  const arrCopy = [...array]

  for(i=0; i<arrCopy.length; i++){
    arrCopy[i] *=2
  }
  return arrCopy
}

console.log(spreadDoubleAll(array3))
console.log(array3)

// another doubleAll pure function with .push()

function doubleAll(a) {
  let c = [];
  for (let i = 0; i < a.length; i++) {
    c.push(a[i] * 2)
  }
  return c;
}

console.log(doubleAll(array3))
console.log(array3)

// Object.assign doubleAll pure function example

function doubleAll(arr){
  newArray = Object.assign([], arr)

  for(i=0; i<newArray.length; i++){
    newArray[i] *=2
  }
  return newArray
}

console.log(doubleAll(array3))
console.log(array3)

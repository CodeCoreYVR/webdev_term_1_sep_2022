// pass by value (number) - pure

const two = 2

function double(num){
  return num*2
}

console.log(double(two)) // returns 4 and will always return 4
console.log(two) // value is still 2 and unchanged

// pass by value (array) - impure

const array = [1,2,3,4,5]

console.log(array)

function doubleAll(arr){
  for(i=0; i<arr.length; i++){
    arr[i]*=2
  }
  return arr
}

// console.log(doubleAll(array)) // returns [2,4,6,8,10]
// console.log(array) // also returns [2,4,6,8,10]. The orginally value has changed therefore the function was not pure!

// shadow copy problem example

const arr =[[1,2,3], [4,5,6]]

const copyArray = [...arr]
console.log("console.logging arr below")
console.log(arr)
console.log("console.logging copyArray")
console.log(copyArray)

copyArray[0] = "changed"
copyArray[1][1] = "mutated nested array"

console.log("console.logging arr below after change")
console.log(arr) // original has been alter which is not always good
// [[1,2,3],[4, 'mutated nested array', 6]]
// arr[1][1] was altered via copyArray[1][1] because it's a shallow copy

console.log("console.logging copyArray after change")
console.log(copyArray) // altered as intended
// ['changed',[4, 'mutated nested array', 6]]

// deep copy example

const array = [[7, 8, 9], [10, 11, 12]]
console.log("console.logging orginal array")
console.log(array)
console.log(typeof array) // array
console.log("console.logging stringified array")
const stringified = JSON.stringify(array)
console.log(stringified)
console.log(typeof stringified) // changed to string

console.log("console.logging JSON.parse(stringified)")
const newArray = JSON.parse(stringified)
console.log(newArray)
console.log(typeof newArray) // changed back to obj from string

newArray[0] = "index 0 has been changed"
newArray[1][1] = "index 1 of index 1 has been changed"

console.log("console.logging array afer changes")
console.log(array) // original has not been altered
// [[7, 8, 9], [10, 11, 12]]

console.log("console.logging newArray after changes")
console.log(newArray) // altered as intended
// ['index 0 has been changed',[10, 'index 1 of index 1 has been changed', 12]]

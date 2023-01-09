//// spread operator demo

// copying an array
const arrayAlphabet = ['a','b','c']
const copyArr = [...arrayAlphabet]
console.log(copyArr)
console.log(arrayAlphabet)

// copying an object
const obj = {a:1, b:2, c:3}
const copyObj = {...obj}
console.log(copyObj)
console.log(obj)

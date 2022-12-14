let arr = ["a", "b", "c", "d", "e"]

let newArray = arr.map((str, index) => {
  console.log("...console.logging str...")
  console.log(str)
  console.log("...console.logging index...")
  console.log(index)

  return str.repeat(index + 1)
})

console.log(newArray)

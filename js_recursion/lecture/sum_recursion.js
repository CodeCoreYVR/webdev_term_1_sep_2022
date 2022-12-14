function sum(arr){
  //base case
  if(arr.length === 0){
    return 0
  } else {
    // console.log("...arr[0]...")
    // console.log(arr[0])
    // console.log("...arr.slice(1)...")
    // console.log(arr.slice(1))
    return arr[0] + sum(arr.slice(1))
  }
}

let array = [1,2,3,4]
console.log(array)
console.log(sum(array))

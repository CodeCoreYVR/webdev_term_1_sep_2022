function joiningNumbers(nums) {
  let arrOfStr = [];
  let sortedNums = Array.from(nums).sort().reverse();

  for (let i = 0; i < sortedNums.length; i++) {
    if (i === sortedNums.length - 1) {
      arrOfStr.push(`${sortedNums[i]}`)
    } else if (Number(sortedNums[i]) == sortedNums[i]) {
      arrOfStr.push(`${sortedNums[i]} is bigger than `)
    }
  }
  console.log(nums,`\n`,sortedNums)
  return arrOfStr.join('');
}

console.log(joiningNumbers([2,3,1,4]))



// [Lab] Joining Numbers

//  How could you turn the array [3, 2, 1] into the string 
//  "3 is bigger than 2 is bigger than 1" using the join method?



// break example
let i = 0
let x = 0

while (i < 10) {
  console.log(x += i)
}

let result = 0;
for (let i = 5; i < 10; i += 1) {
  console.log(result += i);
  // result plus' 5 at first because of initializor i = 5, then will increment to 6, 7, 8 etc
  if (i % 3 === 0) {
    break;
    // if i divides by 3 with no reminder, the code breaks/stops the loop
  }
}
console.log(result); // shows the last number before the code breaks
// will print 11 because the next increment is +6 (0+5+6=11)
// at this point, the code breaks because the increment i = 6, and 6 is divisible by 3


//continue example

let text = "";
for (let i = 0; i < 10; i++) {
  if (i === 5) {
    continue;
    // if i is 5 and also a number type, the code will skip this point, and then continue the loop
  }
  text = text + i // the number will be added to the end of the empty string
}
console.log(text); // prints the completed string after the loop is done

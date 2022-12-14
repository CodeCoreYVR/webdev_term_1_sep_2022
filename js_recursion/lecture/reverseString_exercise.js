////example 1 ////

let newStringArray = []

function reverseString(string){
  if(string.length === 0){
    return newStringArray.join("")
  } else {
    splitStringArr = string.split("")
    newStringArray.unshift(splitStringArr[0])
    splitStringArr.shift()
    string = splitStringArr.join("")
    return reverseString(string)
  }
}
console.log(reverseString("good bye"))

////example 2 ////

function reverseStr1(str) {
  for (let i = str.length - 1; i >= 0; i--) {
    newStr += str[i];
  }
  return newStr;
}
console.log(reverseStr('hello'));

////example 3 ////

let str = "hooman";
// str = str.split("")
let rev = [];

const reverse = x => {
  x.split("");
  if (x.length == 1) {
    rev.unshift(x[0]);
  } else {
    rev.unshift(x[0]);
    reverse(x.slice(1));
  }
  let newrev = rev.join("")
  return newrev;
}


console.log(reverse(str));

////example 4 ////

function reverseString(str) {
  if (str.length === 0) {
    return '';
  }

  return str.substring(str.length, str.length - 1) + reverseString(str.substring(0, str.length - 1));
}
console.log(reverseString("hello"))

const times = {
  0: "twelve",
  1: "one",
  2: "two",
  3: "three",
  4: "four",
  5: "five",
  6: "six",
  7: "seven",
  8: "eight",
  9: "nine",
  10: "ten",
  11: "eleven",
  12: "twelve",
  13: "thirteen",
  14: "fourteen",
  15: "fifteen",
  16: "sixteen",
  17: "seventeen",
  18: "eighteen",
  19: "nineteen",
  20: "twenty",
  30: "thirty",
  40: "fourty",
  50: "fifty"
}

let tellMeTheTime = function(time) {
  let timeArray = time.split(':')
  let returnTime = [];

  if (Number(timeArray[0]) == timeArray[0] && Number(timeArray[1]) == timeArray[1] && Number(timeArray[0]) <= 12 && Number(timeArray[1]) <= 59 && timeArray[0].length <= 2 && timeArray[1].length <= 2) {
    // previous conditional checks if input is convertable to a time.
    if (times[timeArray[0]]) { // checks if the hour is equal to anything in times object.
    returnTime.push(times[timeArray[0]]); // adds hour to returnTime.
    } else {
      returnTime.push(times[timeArray[0][1]]); // only a convertible hour starting with 0 can reach here.
    }
    if (times[timeArray[1]]) { // checks if minutes is equal to anything in times object.
      returnTime.push(times[timeArray[1]]); // adds minutes to returnTime and kicks out of if/else statement.
    } else if (timeArray[1][1]) { // checks if there are two digits in minutes.
      if (timeArray[1] == 00) { // checks if minutes are 00.
        return 'It\'s '+ returnTime.join(' '); // returns returnTime with just 'Its' + hour.
      } else if (timeArray[1][0] == 0) { // checks if first minute digit is 0.
      returnTime.push(times[timeArray[1][1]]) // ignores 0, searches for object key with value of second digit, pushes value into timeArray. 
      } else {
        returnTime.push(times[timeArray[1]-timeArray[1][1]]) // searches for object key with same value as minutes minus second digit of minutes. this is to turn a number like 37 into 30 so it's searchable in the object \"times\".
        returnTime.push(times[timeArray[1][1]]) // searches for object key with same value as second digit of minutes.
      }
    }
  } else {
    return 'Please enter a real time! i.e. \'3:36\'' // returns if input was not an appropriate time value.
  }
  return 'It\'s '+ returnTime.join(' '); // joins returnTime array into a single string, adds the string to end of 'It\'s ' and returns it.
}

console.log(tellMeTheTime('12:59'))





// [Lab] Telling Time
// Opened: Thursday, 24 February 2022, 12:00 AM
// Due: Thursday, 3 March 2022, 12:00 AM

// Given this object as a reference, write a function 'tellMeTheTime' that 
// takes time as a colon-separated number, and returns "It's [that time]!".

// const times = {
//     0: "twelve",
//     1: "one",
//     2: "two",
//     3: "three",
//     4: "four",
//     5: "five",
//     6: "six",
//     7: "seven",
//     8: "eight",
//     9: "nine",
//     10: "ten",
//     11: "eleven",
//     12: "twelve",
//     13: "thirteen",
//     14: "fourteen",
//     15: "fifteen",
//     16: "sixteen",
//     17: "seventeen",
//     18: "eighteen",
//     19: "nineteen",
//     20: "twenty",
//     30: "thirty",
//     40: "fourty",
//     50: "fifty"
// }

// examples
// const l = console.log

// l(tellMeTheTime('10:30')) // "It's ten thirty"
// l(tellMeTheTime('5:14')) // "It's five fourteen"
// l(tellMeTheTime('2:37')) // "It's two thirty seven"
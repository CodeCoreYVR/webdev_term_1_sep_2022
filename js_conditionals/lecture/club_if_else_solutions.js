// example 1

let height = 150;
let age = 8;
let goodSpeedTolerance = true;
let pregnant = true;
let noiseSenitivity = false;


if (height < 102) {
  console.log("You are too short to ride this awesome coaster. You're really missing out on a great expereince!")
} else if (age < 3) {
  console.log("You are too young to ride this coaster.")
} else if (!goodSpeedTolerance) {
  console.log("I guess you don't like to go fast. You may not ride.")
} else if (pregnant) {
  console.log("You are with child, you may not ride.")
} else if (noiseSenitivity) {
  console.log("You don't like loud noises, you may not ride.")
} else {
  console.log("Get on and enjoy the coaster. You may ride!!")
};

// example 2

let haveId = true;
let age = 20;
let fakeId = false;
let priorityTicket = false;
let famous = false;
let haveFriend = false;

if (famous) {
  console.log('OK, you can enter');
} else if (haveId && age > 19 && !fakeId && priorityTicket) {
  console.log('You can enter from priority entrance');
} else if (haveId && age > 19 && !fakeId && haveFriend) {
  console.log('You can get discount');
} else if (!haveId && age > 19 && !fakeId) {
  console.log('You need valid ID to enter.');
} else if (haveId && age > 19 && !fakeId) {
  console.log('You can enter.');
} else if (haveId && age < 19 && !fakeId) {
  console.log('Only over 19 years old can enter');
} else if (haveId && age > 19 && fakeId) {
  console.log('Your ID is fake! I will call police');
} else {
  console.log('You are not allowed to enter.');
}

// example 3 (nested)

let famous = `no`;
let doYouHaveId = `yes`;
let howOldAreYou = 20;
let isTHeIDFake = `no`;
let doYouHavePriorityTicket = `no`;
let doYouHaveaFriendWhoWorksHere = `yes`;

if (famous == `yes`) {
  console.log(`You can come inside.`);
} else if (doYouHaveId == `no`) {
  console.log(`Please go out!`);
} else if (howOldAreYou < 19) {
  console.log(`You can\`t enter, Please go out.`);
} else if (isTHeIDFake == `yes`) {
  console.log(`Please Go OUT! You are using a FAKE ID!`);
} else {
  console.log(`ok , you can join the queue.`)
  if (doYouHavePriorityTicket == `yes`) {
    console.log(`Let time jump the queue.`);
  } else if (doYouHaveaFriendWhoWorksHere == `yes`) {
    console.log(`Let them in and give them discount.`);
  }
}

// example 4 (nested)

let vipStatus = false
let haveTicket = true
let haveIdCard = true
let isIdFake = false
let age = 17
let knowsStaff = true

if (vipStatus) {
  console.log("Please let me show you to the VIP area")
} else if (haveIdCard) {
  if (isIdFake) {
    console.log("GET OUT OF MY CLUB THIS ID IS FAKE!!!")
  } else if (age < 19) {
    console.log("It's pass your bedtime. You are underaged")
  } else if (haveTicket) {
    console.log("Please join the priority line")
  } else if (knowsStaff) {
    console.log("Oh yeah they're a good person! I'll tell them you're here and give you discount.")
  }
} else if (!haveIdCard) {
  console.log("Sorry you need ID to get in...")
} else {
  console.log("Please join the back of the queue")
}

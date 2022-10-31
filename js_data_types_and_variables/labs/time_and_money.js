// [Lab] Time and Money
// Opened: Saturday, 22 October 2022, 12:00 AM

// 60. Adding Money: Thomas and Matthew are saving up money to buy a video game together. 
//     Thomas has saved $30. Matthew has saved $35. How much money have they saved up together 
//     in total?
let thomasSavings = 30;
let matthewSavings = 35;
let totalSavings = thomasSavings + matthewSavings;
console.log(`60 - Thomas and Matthew saved a total of $${totalSavings}!`);

// 61. Subtracting Money: Thomas has $80 saved up. He uses his money to buy a video game. 
//     The video game costs $67. How much money does he have left?
let thomasMoney = 80;
let gameCost = 67;
thomasMoney -= gameCost;
console.log(`61 - Thomas has $${thomasMoney} left after buying the video game!`);

// 62. Multiplying Money: Tim gets $5 for delivering the paper. How much money will he have 
//     after delivering the paper 3 times?
let payPerDelivery = 5;
let timesDelivered = 3;
let totalEarned = payPerDelivery * timesDelivered;
console.log(`62 - Time has earned $${totalEarned} from delivering the paper!`);

// 63. Dividing Money: Robert spent $184.59 to buy 3 hockey sticks. If each hockey stick was 
//     the same price, how much did 1 cost?
let spent = 184.59;
let stickCost = spent / 3;
console.log(`63 - Robert payed $${stickCost} per hockey stick!`);

// 64. Adding Money with Decimals: You went to the store and bought gum for $1.25 and a sucker 
//     for $0.50. How much was your total?
let gum = 1.25;
let sucker = 0.5;
let totalBill = gum + sucker;
console.log(`64 - My bill came to $${totalBill}!`);

// 65. Subtracting Money with Decimals: You went to the store with $5.50. You bought gum for 
//     $1.25, a chocolate bar for $1.15 and a sucker for $0.50. How much money do you have 
//     left?
let totalMoney = 5.5;
let chocolateBar = 1.15;
totalMoney = (totalMoney - gum - chocolateBar - sucker).toFixed(2);
console.log(`65 - I have $${totalMoney} left after my last purchase!`);

// 66. Converting Hours into Minutes: Jeremy helped his mom for 1 hour. For how many minutes 
//     was he helping her?
let timeHelpedHours = 1;
let timeHelpedMin = timeHelpedHours * 60;
console.log(`66 - Jeremy helped his mum for ${timeHelpedMin}min!`);

// 67. Applying Proportional Relationships to Money: Jakob wants to invite 20 friends to his 
//     birthday, which will cost his parents $250. If he decides to invite 15 friends instead, 
//     how much money will it cost his parents? Assume the relationship is directly proportional.
let inviteWantCount = 20;
let inviteWantCost = 250;
let costPerPerson = inviteWantCost / inviteWantCount;
let possibleInviteCount = 15;
let possibleInviteCountCost = possibleInviteCount * costPerPerson;
console.log(`67 - If Jakob invites ${possibleInviteCount} friends then the cost will be $${possibleInviteCountCost.toFixed(2)} in total!`);

// 68. Applying Percentages to Money: Retta put $100.00 in a bank account that gains 20% interest 
//     annually. How much interest will be accumulated in 1 year? And if she makes no withdrawals, 
//     how much money will be in the account after 1 year?
let bankAccount = 100;
let interestPerYear = 0.2;
let years = 1;
let interestEarned = bankAccount * interestPerYear * years;
bankAccount += interestEarned;
console.log(`68 - After one year Retta will have earned $${interestEarned} and will have $${bankAccount} in her bank account!`);

// 69. Adding Time: If you wake up at 7:00 a.m. and it takes you 1 hour and 30 minutes to get 
//     ready and walk to school, at what time will you get to school?
let wakeTime = 7;
let timeToSchool = 1.5;
let timeArrived = wakeTime + timeToSchool;
let timeArrivedHourOnly = Math.floor(timeArrived)
let timeArrivedMinOnly = (timeArrived * 60) % 60; // this turns timeArrived into minutes then divides by 60. It then assigns only the remainder to timeArrivedMinOnly.
let timeArrivedToStr = `${timeArrivedHourOnly}:${timeArrivedMinOnly}`;
console.log(`69 - I would arrive at school at ${timeArrivedToStr} a.m.!`)

// 70. Subtracting Time: If a train departs at 2:00 p.m. and arrives at 4:00 p.m., how long were 
//     passengers on the train for?
let trainDepart = 2;
let trainArrive = 4;
let timeOnTrain = trainArrive - trainDepart;
console.log(`70 - Passengers would have been on the train for ${timeOnTrain}hrs!`);

// 71. Finding Start and End Times: Rebecca left her dad’s store to go home at twenty to seven 
//     in the evening. Forty minutes later, she was home. What time was it when she arrived home?
let timeLeftStore = 6.66666;
let timeToHome = 0.66666;
let timeArrivedHome = timeLeftStore + timeToHome;
let timeArrivedHomeHourOnly = Math.floor(timeArrivedHome);
let timeArrivedHomeMinOnly = (timeArrivedHome * 60) % 60; // This assignes timeArrivedHomeMinOnly with the remainder after dividing by 60.
let timeArrivedHomeToStr = `${timeArrivedHomeHourOnly}:${Math.round(timeArrivedHomeMinOnly)}`;
console.log(`71 - Rebecca arrived home from her dad's store at ${timeArrivedHomeToStr} p.m.!`)




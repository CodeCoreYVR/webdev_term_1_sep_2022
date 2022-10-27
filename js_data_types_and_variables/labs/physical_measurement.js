// [Lab] Physical Measurement
// // Opened: Sunday, 23 October 2022, 12:00 AM

// 72. Comparing Measurements: Cassandra’s ruler is 22 centimetres long. April’s ruler is 30 
    // centimetres long. How many centimetres longer is April’s ruler?
let cassRuler = 22;
let aprRuler = 30;
let difference = aprRuler - cassRuler;
console.log(`72 - Aprils ruler is ${difference} longer than cassandra's!`);


// 74. Adding Measurements: Micha’s dad wants to try to save money on gas, so he has been 
    // tracking how much he uses. Last year, Micha’s dad used 100 litres of gas. This year, her 
    // dad used 90 litres of gas. How much gas did he use in total for the two years?
let prevYearGas = 100;
let thisYearGas = 90;
let totalGas = prevYearGas + thisYearGas;
console.log(`74 - Micha's dad used ${totalGas}L of gas total over the last two years!`);

// 75. Subtracting Measurements: Micha’s dad wants to try to save money on gas, so he has 
    // been tracking how much he uses. Over the past two years, Micha’s dad used 200 litres of 
    // gas. This year, he used 100 litres of gas. How much gas did he use last year?
let pastTwoYearsGas = 200;
let currentYearGas = 100;
let lastYearGas = pastTwoYearsGas - currentYearGas;
console.log(`75 - Last year Micha's dad used ${lastYearGas}L of gas!`);

// 76. Multiplying Volume and Mass: Kiera wants to make sure she has strong bones, so she 
    // drinks 2 litres of milk every week. After 3 weeks, how many litres of milk will Kiera drink?
let milkPerWeek = 2;
let totalWeeks = 3;
let totalMilk = milkPerWeek * totalWeeks;
console.log(`76 - Kiera drank ${totalMilk}L of milk in total!`);

// 77. Dividing Volume and Mass: Lillian is doing some gardening, so she bought 1 kilogram of 
    // soil. She wants to spread the soil evenly between her 2 plants. How much will each plant get?
let soil = 1;
let plants = 2;
let soilPerPlant = soil / plants;
console.log(`77 - Each of Lillians plants will get ${soilPerPlant}kg of soil!`);

// 78. Converting Mass: Inger goes to the grocery store and buys 3 squashes that each weigh 500 
    // grams. How many kilograms of squash did Inger buy?
let squashes = 3;
let weightOfSquash = 500;
let gmToKg = weightOfSquash / 1000;
let totalWeight = squashes * gmToKg;
console.log(`78 - Inger has ${totalWeight}kg of squash!`);

// 79. Converting Volume: Shad has a lemonade stand and sold 20 cups of lemonade. Each cup was 
    // 500 millilitres. How many litres did Shad sell in total?
let soldCupsOfLemonade = 20;
let mlsPerCup = 500;
let mlToL = mlsPerCup / 1000;
let totalLitresOfSoldLemonade = soldCupsOfLemonade * mlToL;
console.log(`79 - Shadsold ${totalLitresOfSoldLemonade}L of lemonade in total!`);

// 80. Converting Length: Stacy and Milda are comparing their heights. Stacy is 1.5 meters tall. 
    // Milda is 10 centimetres taller than Stacy. What is Milda’s height in centimetres?
let stacyHeight = 1.5;
let cmStacyHeight = stacyHeight * 100;
let mildaHeight = cmStacyHeight + 10;
console.log(`80 - Milda is ${mildaHeight}cm tall!`);

// 81. Understanding Distance and Direction: A bus leaves the school to take students on a field 
    // trip. The bus travels 10 kilometres south, 10 kilometres west, another 5 kilometres south and 
    // 15 kilometres north. To return to the school, in which direction does the bus have to travel? 
    // How many kilometres must it travel in that direction?
let y = 0;
let x = 0;
let southTen = -10;
let westTen = -10;
let southFive = -5;
let northFifteen = +15;
y = southTen + southFive + northFifteen;
x = westTen;
let directionY = 'North';
let directionX = 'East';

if (y < 0) {
  directionY = 'North';
  y = y * -1;
} else if (y > 0) {
  directionY = 'South';
}
if (x < 0) {
  directionX = 'East';
  x = x * -1;
} else if (x > 0) {
  directionY = 'West';
}

console.log(`81 - The school bus still needs to travel ${y}km ${directionY} and ${x}km ${directionX} to get back to the school!`)
 

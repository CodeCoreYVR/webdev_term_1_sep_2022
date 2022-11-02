//// eg. Should I go to school? /////

let isWeekend = false
let brushedTeeth = true
let hasLunchMoney = false
let hasLunchbox = true
let shouldGoToSchool = !isWeekend && brushedTeeth && (hasLunchMoney || hasLunchbox)
// console.log(shouldGoToSchool)

///// 1. Can I wash my clothes? /////
let haveDirtyClothes = true;
let haveDetergent = false;
let doesWashingMachineWork = false;
let canIWashMyClothes =
  (haveDirtyClothes && haveDetergent) || !doesWashingMachineWork;
// console.log(canIWashMyClothes);

///// 2. Is Keerat going to work? /////
let iAmGoingOnWorkOnSunday = true
let makeLunchforBreak = false
let iShouldAskForMytasksToDo = true
let iAmNotGoing = (!iAmGoingOnWorkOnSunday || makeLunchforBreak) && iShouldAskForMytasksToDo
// console.log(iAmNotGoing)


///// 3. As an eagle should I swoop down and strike that rodent? /////
let hungry = false;
let rodentInSight = true;
let feelingFocused = false;
let gotTheSkillss = true;

let strikeRodent = (!hungry && rodentInSight) || (feelingFocused && rodentInSight) || (gotTheSkillss && rodentInSight);
// console.log(strikeRodent);

///// 4. Can I go to canada?? /////
let doIHavePR = false;
let doIHaveStudyPermit = true;
let haveEnoughMoney = false;
let doIHavePlaceToStay = true;

let canIGoToCanada = !haveEnoughMoney && doIHavePlaceToStay && (doIHavePR || doIHaveStudyPermit)
console.log(canIGoToCanada)

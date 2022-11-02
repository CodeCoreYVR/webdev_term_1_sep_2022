// &&(and) operator exercise

// eg. Can I leave the house in peace?
let hasKeys = false
let lockedDoor = false
let canILeaveTheHouseInPeace = hasKeys && lockedDoor
// console.log(canILeaveTheHouseInPeace) // false

///// Scenario with two true /////
// 1. Will I go to work?
let doesTheCarWork = true
let doIWantToGoToWork = true
let willIGoToWork = doesTheCarWork && doIWantToGoToWork
// console.log(willIGoToWork) // true

// 2. As Kanye West, should I tweet something?
let crazyThoughts = true
let lateAtNight = true
let tweet = crazyThoughts && lateAtNight
// console.log(tweet) // true

// 3. Will I get on the bus?
let waitAtBusBay = true
let getOnTheBus = true
let willIGetOnTheBus = waitAtBusBay && getOnTheBus
// console.log(willIGetOnTheBus) // true

// 4. Can I go snowboarding?
let haveALiftTicket = true
let haveASnowboard = true
let canIGotSnowboarding = haveALiftTicket && haveASnowboard
// console.log(canIGotSnowboarding) // true

///// Scenario with two false /////

// 1. Can I make chicken rice?
let doIHaveChicken = false
let doIHaveRice = false
let canIMakeChickenRice = doIHaveChicken && doIHaveRice
// console.log(canIMakeChickenRice) //false

// 2. Can I drive?
let haveALicence = false
let doesTheCarHaveFuel = false
let canIDrive = haveALicence && doesTheCarHaveFuel
// console.log(canIDrive) // false

// 3. Will I make it to school on time?
let canIGetToTheBusOnTime = false
let isThereANextBus = false
let willIMakeItToSchoolOnTime = canIGetToTheBusOnTime && isThereANextBus
// console.log(willIMakeItToSchoolOnTime) // False

// 4. Should I leave my castle as a vampire?
let noSun = false
let humansOutsideToEat = false
let goOutside = noSun && humansOutsideToEat
// console.log(goOutside) //false

///// Scenarios with one true and one false /////

// 1. Should I answer a call from my ex?
let incomingCall = true
let desireToAnswer = false
let answerCall = incomingCall && desireToAnswer
// console.log(answerCall) // false

// 2. Am I ready to take the flight?
let buyFlightTicket = true
let luggagePacked = false
let readyForFLight = buyFlightTicket && luggagePacked
// console.log(readyForFLight)  //false

// 3. Am I ready to watch a movie?
let playMovie = true
let havePopcorn = false
let readyForMovie = playMovie && havePopcorn
// console.log(readyForMovie) // false

// 4. Does the elevator work?
let elevatorNeedElectricity = true
let elevatorHasElectricity = false
let doesItWork = elevatorNeedElectricity && elevatorHasElectricity
// console.log(doesItWork) // false

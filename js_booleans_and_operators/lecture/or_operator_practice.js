// || or operator exercise

///// e.g Am I be tired? /////
let wentToBedLate = true
let workedLongShift = false
let amITired = wentToBedLate || workedLongShift
// console.log(amITired) // true

wentToBedLate = false
workedLongShift = true
amITired = wentToBedLate || workedLongShift
// console.log(amITired) // true

wentToBedLate = true
workedLongShift = true
amITired = wentToBedLate || workedLongShift
// console.log(amITired) // true

wentToBedLate = false
workedLongShift = false
amITired = wentToBedLate || workedLongShift
// console.log(amITired) // false

///// 1. Will I stay up late? /////
let didINap = true
let didIDrinkCoffee = false
let willIStayUpLate = didINap || didIDrinkCoffee
// console.log(willIStayUpLate) // true

didINap = false
didIDrinkCoffee = true
willIStayUpLate = didINap || didIDrinkCoffee
// console.log(willIStayUpLate) // true

didINap = true
didIDrinkCoffee = true
willIStayUpLate = didINap || didIDrinkCoffee
// console.log(willIStayUpLate) // true

didINap = false
didIDrinkCoffee = false
willIStayUpLate = didINap || didIDrinkCoffee
// console.log(willIStayUpLate) // false

///// 2. Can I use my laptop? /////
let isItCharged = true
let doIHaveTheCharger = false
let canIuseMyLaptop = isItCharged || doIHaveTheCharger
// console.log(canIuseMyLaptop) // true

isItCharged = false
doIHaveTheCharger = true
canIuseMyLaptop = isItCharged || doIHaveTheCharger
// console.log(canIuseMyLaptop) // true

isItCharged = true
doIHaveTheCharger = true
canIuseMyLaptop = isItCharged || doIHaveTheCharger
// console.log(canIuseMyLaptop) // true

isItCharged = false
doIHaveTheCharger = false
canIuseMyLaptop = isItCharged || doIHaveTheCharger
// console.log(canIuseMyLaptop) // false

///// 3. Should I go to my aunt's house? /////
let doIhaveAGiftForAunt = true
let canIstayOvernight = false
let stayAtAuntsHouse = doIhaveAGiftForAunt || canIstayOvernight
// console.log(stayAtAuntsHouse) // true

doIhaveAGiftForAunt = false
canIstayOvernight = true
stayAtAuntsHouse = doIhaveAGiftForAunt || canIstayOvernight
// console.log(stayAtAuntsHouse) //true

doIhaveAGiftForAunt = true
canIstayOvernight = true
stayAtAuntsHouse = doIhaveAGiftForAunt || canIstayOvernight
// console.log(stayAtAuntsHouse) // true

doIhaveAGiftForAunt = false
canIstayOvernight = false
stayAtAuntsHouse = doIhaveAGiftForAunt || canIstayOvernight
// console.log(stayAtAuntsHouse) // false

///// 4. Should I steal one of my roommate's cookies? /////
let theyLookTasty = true
let isThereAFreshCookieSmell = false
let stealCookie = theyLookTasty || isThereAFreshCookieSmell
console.log(stealCookie) // true

theyLookTasty = false
isThereAFreshCookieSmell = true
stealCookie = theyLookTasty || isThereAFreshCookieSmell
console.log(stealCookie) // true

theyLookTasty = true
isThereAFreshCookieSmell = true
stealCookie = theyLookTasty || isThereAFreshCookieSmell
console.log(stealCookie) // true

theyLookTasty = false
isThereAFreshCookieSmell = false
stealCookie = theyLookTasty || isThereAFreshCookieSmell
console.log(stealCookie) // false

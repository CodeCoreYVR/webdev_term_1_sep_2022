// Draw the following staircase below with code!

//          _
//        _|5
//      _|4
//    _|3
//  _|2
// |1

// need 6 rows
// will need spacing between outside of stairs and horizontal line [9, 7, 5, 3, 1]
// vertical line prints after horizontal line (from line 2)
// HOWEVER, last line, no horizontal line
// numbers start from line 2, and decreases by 1 (started from num 5)

let space = 9
let stepNum = 5

console.log((" ").repeat(space) + "_")

for (let row = 2; row <= 5; row++) {
  space -= 2
  console.log((" ").repeat(space) + `_|${stepNum}`)
  stepNum -= 1
}

console.log("|1")

//// another way

// function stair() {
//     console.log("         _")
//     for (let row =5; row >=2; row--) {
//      console.log((" ").repeat(spacing) + ("_")+("|")+(`${row}`))
//      spacing -= 2
//     }
//     console.log("|1")
// }
// stair()

//// another way

// let n = 6;
// let space = ' ';

// for (let i = n; i > 0; i--) {
//   let spaceCount = i * 2 - 3;
//   if (i === 6) {
//     console.log(space.repeat(i + 3) + '_');
//   } else if (i === 1) {
//     console.log('|' + i);
//   } else {
//     console.log(space.repeat(spaceCount) + ('_|' + i));
//   }
// }

//// another way

// let line = 6 ;
// for (let i = 1 ; i <= line ; i++){
//     if ( i == 1){
//         console.log(" ".repeat(line + 3) + "_");
//     } else if ( i == line ){
//         console.log("|" + 1);
//     } else {
//         console.log(" ".repeat((line+3)-(((i-1)*2)))+"_|"+(line-(i-1)));
//     }
// }

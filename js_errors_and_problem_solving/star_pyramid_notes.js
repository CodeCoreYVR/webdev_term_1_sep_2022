// psuedo code / notes before coding
// how may rows (5)
// we need each row to have to same amount of stars drawn (row 1 = 1 star drawn / row 2 = 2 star drawn etc)
// space outside the pyramid [20, 16, 12, 8, 4, 0] (decreasing by -4)
// space between the stars (7 spaces)
// we need to print star or space

// need to end up with 5 rows
// let stars = row

// solution (in function and numbers needed in variables)
let outsideSpacing = 20
let spaceInbetweenStars = 7

function drawStar() {
  for (let row =1; row <=5; row++) {
    let extraStar = row
    console.log((" ").repeat(outsideSpacing) + (("*") + (" ").repeat(7)).repeat(extraStar))
    outsideSpacing -= 4
  }
}

drawStar()

// solution (not in function, no extra space after last star)

let outsideSpacing = 20
let extraStar = 0
for (let row = 1; row <= 5; row++) {
  console.log((" ").repeat(outsideSpacing) + ("*") + (("       ") + ("*")).repeat(extraStar))
  outsideSpacing -= 4
  extraStar += 1
}

// Hooman's idea

// 1. start from left bottom star
// 2. draw stars going from left to right to the highest star
// 3. draw from highest star to left bottom star
// 4. got left one star (will be onn bottom 3rd star)
// 5. draw up/left to middle star of third row from bottom
// 6. draw up/left to bottom second star
// 7. draw right and end on bottom middle star

// Keerat's idea

// 1. make variable n
// 2. used for loop 3 times
// 3. one loop for the whole pyramid / one for stars / one for spaces

// Ron's idea

// 1. Draw five rows of stars
// 2. Total stars will start at 5 stars, and descending down by one star for each row until you get one star
// 3. Stars are evenly spaces vertically, and evenly spaced horitonally inbetween the stars' lines above and below them
// 4. Star at the bottom row with 5 stars, until reaching the top row with single star

// Ayaka's idea

// 1. Draw stars from top to bottom
// 2. needs to create the space using for loop somehow
// 3. Print the star with the for loop somehow

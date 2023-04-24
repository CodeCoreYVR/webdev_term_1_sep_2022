// The time complexity of this algorithm is O(2^n), which means that the number of operations 
// required to solve the problem grows exponentially with the number of disks. 

// Define a function to move a single disk from one rod to another
function moveDisk(sourceRod, destRod) {
  console.log(`Move a disk from ${sourceRod} to ${destRod}`);
}

// Define the recursive function to move the tower of disks
function moveTowerOfHanoi(numDisks, sourceRod, destRod, auxRod) {
  if (numDisks === 1) {
    // If there is only one disk, move it from the source rod to the destination rod
    moveDisk(sourceRod, destRod);
  } else {
    // Move the tower of n-1 disks from the source rod to the auxiliary rod
    moveTowerOfHanoi(numDisks - 1, sourceRod, auxRod, destRod);
    // Move the largest disk from the source rod to the destination rod
    moveDisk(sourceRod, destRod);
    // Move the tower of n-1 disks from the auxiliary rod to the destination rod
    moveTowerOfHanoi(numDisks - 1, auxRod, destRod, sourceRod);
  }
}

// Call the function to move the tower of disks
moveTowerOfHanoi(3, 'A', 'C', 'B');



// [Lab] Towers of Hanoi

// 1. Tower of Hanoi is a puzzle that's easily solved using Stacks.
// 2. You are given a set of disks each with a different size and three rods. All the disks are placed into one rod from lowest to highest. Your task is to move this tower of disks into another rod and you can only move one disk at at time. A disk can only be moved onto a disk which is heavier than itself.
// 3. https://en.wikipedia.org/wiki/Tower_of_Hanoi
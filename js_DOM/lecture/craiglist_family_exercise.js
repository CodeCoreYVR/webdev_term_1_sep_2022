// finding siblings

// Craiglist has a lot of links, find the first link
const firstLink = document.querySelector('a')

// What type of tag is the next sibling from the link?
firstLink.nextElementSibling
// will return a <nav> link

// What type of tag is the following sibling?
firstLink.nextElementSibling.nextElementSibling
// will return a <div> tag

// Does the first link have a previous sibling ? If so, what type of tag is it?
firstLink.previousElementSibling
//returns null, therefore no

// Find the first div
firstDiv = document.querySelector('div')

// What is the next sibling from the first div?
firstDiv.nextElementSibling
// returns another <div> tag

// How many more siblings from the first div until we hit null?
firstDiv.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling
// 4 times in total before hitting null

// Does the first div have a previous sibling ? If so, what type of tag is it?
firstDiv.previousElementSibling
// returns <iframe> tag

// finding more family members

// What type of element tag is the parent of the first link element?
firstLink.parentElement
//returns a <header> tag

// How many parents can we go back with the first link until we hit null? What element tags did we hit before getting to null?
firstLink.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement
// called .parentElement 6 times in total before null
//header, section, div, body, html, finally null


// What is the first and last child of the first tag? What do they return?
firstLink.firstElementChild // returns null
firstLink.lastElementChild // also returns null
// this is expected because a link won't really have any children


// What type of element tag is the parent of the div element?
firstDiv.parentElement
// returns <body> tag

// How many parents can we go back with the first div element until we hit null? What element tags did we hit before getting to null?
firstDiv.parentElement.parentElement.parentElement
// called .parentElement 3 times before hitting null
//body, html, finally null


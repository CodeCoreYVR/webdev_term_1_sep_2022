// Start server from index.html file.
// Inspect page and click on console.
// Add the following JavaScript to the conole to manipulate the page.

/* returns the selected doggo */
function getSelectedDoggo() {
	return document.querySelector('.doggo.fighter.selected');
}
/* removes the selected doggo, if one exists */
function removeSelected() {
	const selected = getSelectedDoggo();
	if (selected) {
		selected.classList.remove('selected');
	}
}

// Clicking a .doggo.fighter adds the selected class to it.
// A doggo with the selected class is considered selected.
// Only one doggo can have the selected class.
document.querySelectorAll('.doggo.fighter').forEach(doggo => {
	doggo.addEventListener('click', e => {
		removeSelected();
		doggo.classList.add('selected');
	});
});

// Clicking a team's name, moves a selected doggo to that team.
// the `closest` method is a query selector that queries for the closest
// ancestor (parent, grandparent, etc) that satisfies the query.
// In this case, we are querying for an ancestor with the class 'team'
document.querySelectorAll('.team > h1').forEach(teamTitle => {
	teamTitle.addEventListener('click', e => {
		const roster = teamTitle.closest('.team').querySelector('.roster');
		let traitorDog = getSelectedDoggo();
		if (traitorDog) {
			roster.append(traitorDog);
		}
	});
});

// Stretch
// Clicking anywhere else on the page, unselects all selected .doggo.fighters.
document.body.addEventListener('click', event => {
	const { target } = event;
	if (!target.closest('.team')) removeSelected();
});



// ---------------------------------------------------------------------------
// [Lab] Selecting Doggos

// It's best to start with a fresh clone of Doggo Arena for the labs.

// Implement the ability to select doggos

//   1.  Clicking a .doggo.fighter adds the selected class to it. A doggo 
//       with the selected class is considered selected.
//   2.  Only one doggo can have the selected class.
//   3.  Clicking a team's name, moves a selected doggo to that team.

// Stretch
//     Clicking anywhere else on the page, unselects all selected .doggo.fighters.
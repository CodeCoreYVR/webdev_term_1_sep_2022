function getSelected() {
  return document.querySelector('.doggo.fighter.selected'); // null/undefined if nothing is selected
}

function unselectAllDoggos() {
  const selected = getSelected();
  if (selected) {
    selected.classList.remove('selected');
  }
}

// function removeSelected() {
//   const selected = getSelected();
//   if (selected) {
//     selected.remove();
//   }
// }

// document.addEventListener('keydown', e => {
// 	const doggos = document.querySelectorAll('.doggo.fighter');
//   const isCtrlKeyPressed = e.ctrlKey;
//   // e.keyCode 0 -> 48, 9 -> 57;
//   const numberPressed = e.keyCode - 48;
//   const isNumberPressed = numberPressed >= 0 && numberPressed <= doggos.length - 1;

//   if (isCtrlKeyPressed && isNumberPressed) {
//     unselectAllDoggos();
//     const selected = doggos[numberPressed];
//     selected.classList.add('selected');
//   } else if (e.key === "Backspace") {
//     removeSelected();
//   }
// });

// ******************** Above Commented Out Code Plus STRETCH ********************

document.addEventListener('keydown', e => {
  
  const isCtrlKeyPressed = e.ctrlKey;
  const doggos = document.querySelectorAll('.doggo.fighter');
  const numberPressed = e.keyCode - 48;
	const isNumberPressed = numberPressed >= 0 && numberPressed <= doggos.length - 1;
	const selected = getSelected();

	if (selected && isCtrlKeyPressed && e.key === 'ArrowDown') { // Ctrl + 0......... number of doggos
		if (selected.parentNode.parentNode.classList.contains('salmon')) {
			document.querySelector('.teal > .roster').append(selected);
			unselectAllDoggos();
		}
	} else if (selected && isCtrlKeyPressed && e.key === 'ArrowUp') {
		if (selected.parentNode.parentNode.classList.contains('teal')) {
			document.querySelector('.salmon > .roster').append(selected);
			unselectAllDoggos();
		}
	} else if (isCtrlKeyPressed && isNumberPressed) {
    unselectAllDoggos();
    const selected = doggos[numberPressed];
    selected.classList.add('selected');
  } else if (e.key === "Backspace") {
    removeSelected();
  }
});



// ---------------------------------------------------------------------
// [Lab] User Friendly Shortcuts

// Doggo Arena is shaping up nicely, but market research has shown that power 
// users will be unhappy with the lack of shortcuts.

//   1.  Holding ctrl and pressing a number selects the .doggo.fighter at that 
//       index. .team.salmon doggo's should be first. This should work even if 
//       new  .doggo.fighters are added to the team (e.g. Pressing ctrl-0 
//       selects #toxic-tim, pressing ctrl-4 selects #larry-the-lion, etc)
//   2.  backspace removes a selected .doggo.fighter from the DOM.

// Refer to [Lab] Selecting Doggo for a definition of a selected doggo

// Stretch
//   With a .doggo.fighter selected, holding ctrl and pressing up arrow moves 
//   a .doggo.fighter to the team above; pressing ctrl + down arrow, moves 
//   selected .doggo.fighter to the team below. This unselects the selected 
//   doggo in the process.


// Start server from index.html file.
// Inspect page and click on console.
// Add the following JavaScript to the conole to manipulate the page.

// Update the applicant preview's h1 node contents with the applicant name as it is typed.
const nameInput = document.querySelector('#name');
const previewName = document.querySelector('#application-preview h1');

nameInput.addEventListener('input', event => {
	previewName.innerText = event.currentTarget.value;
});

// Update the applicant preview's picture once a valid picture url as it is typed.
// Check that the typed in field ends with .jpg, .gif or .png.
// sample gif: http://25.media.tumblr.com/7fcfecd8dba001ecdbae6bff5fe10342/tumblr_mg6awfY46I1s2a05ho1_400.gif
const pictureUrl = document.querySelector('#picture-url');
const blankDoggo = document.querySelector('.doggo.blank');

pictureUrl.addEventListener('input', event => {
	const value = event.currentTarget.value;
	const ending = value.slice(-4);
	const validEndings = ['.jpg', '.gif', '.png'];
	if (validEndings.includes(ending)) {
		blankDoggo.style.backgroundImage = `url(${value})`;
	}
});

// Give a salmon or teal border to the applicant preview depending on which team is typed.
function isValidTeamName(name) {
  // Helper function
  /* checks if the name is a valid team name */
	const tName = name.toLowerCase();
	const validTeamNames = ['teal', 'salmon'];
	return validTeamNames.includes(tName);
}

const teamName = document.querySelector('#team-name');
const applicationPreview = document.querySelector('#application-preview');

teamName.addEventListener('input', event => {
	const { value } = event.currentTarget;
	if (isValidTeamName(value)) {
		applicationPreview.style.border = `5px solid ${value}`;
	}
});

// When the form is submitted, reset the applicant preview and create that .doggo.fighter in the team written in the team name field.
function resetForm() {
  // Helper function
  /* clears the form and the applicant preview */
	form.reset();
	applicationPreview.style.border = '';
	previewName.innerText = 'Application Preview';
	blankDoggo.style.background = '';
}

const form = document.querySelector('#application-form');

form.addEventListener('submit', event => {
	event.preventDefault();
	const newDoggo = blankDoggo.cloneNode(true);
	if (isValidTeamName(teamName.value)) {
		document.querySelector(`.team.${teamName.value} .roster`).appendChild(newDoggo);
		newDoggo.classList.remove("blank");
		newDoggo.classList.add("doggo");
		newDoggo.classList.add('fighter');
		newDoggo.addEventListener('click', e => {
			removeSelected();
			newDoggo.classList.add('selected');
		});
		resetForm();
	} else {
		alert('that is not a valid team name');
	}
});




// ---------------------------------------------------------
// [Lab] Recruiting New Fighters

// Doggo Arena has an enrollment form for new doggo fighters, but it is 
// currently non-functional.

//   1. Update the applicant preview's h1 node contents with the applicant 
//      name as it is typed.
//   2. Update the applicant preview's picture once a valid picture url as 
//      it is typed. Check that the typed in field ends with .jpg, .gif or  
//      .png.
//   3. Give a salmon or teal border to the applicant preview depending on 
//      which team is typed.
//   4. When the form is submitted, reset the applicant preview and create 
//      that  .doggo.fighter in the team written in the team name field.


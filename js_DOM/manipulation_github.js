//// changing all the squares in contribution calendar on github to green

squares = document.querySelectorAll('.ContributionCalendar-day')

squares.forEach(square =>
  square.style.fill = 'green')


//// changing display name and user name

displayName = document.querySelector('.p-name.vcard-fullname')
displayName.innerHTML = "NEW DISPLAY NAME"

username = document.querySelector('.p-nickname.vcard-username')
username.innerText = "new-username3012"

//// deleting a node, using appendChild and insertBefore

// deleting the username
username.remove()

// creating new username
newusername = document.createElement('span')
newusername.className = 'p-nickname vcard-username d-block'
newusername.setAttribute('itemprop', 'additionalName')
newusername.innerHTML = "newusername3012"

// appending the username
parentElement = document.querySelector('h1')
parentElement.appendChild(newusername)

// creating the quote
quote = document.createElement('span')
quote.innerHTML = "this is a clever quote'

// inserting the quote before the new username
parentElement.insertBefore(quote, newusername)

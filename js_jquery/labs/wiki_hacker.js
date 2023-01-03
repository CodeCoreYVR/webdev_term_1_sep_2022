//  1. Change the title of the article to your name
$('.mw-page-title-main').html('<Insert Name Here>')
// or
$('h1').html('Insert Name Here')

//  2. Hide the body of the article
$('body').hide() 

//  3. Replace the Wikipedia logo with another picture
$('a.mw-wiki-logo').css("background-image", "url(https://freepngimg.com/thumb/rat/7-2-rat-png-picture-thumb.png)")

// Stretch
//   1.  Replace the word "pug" in every  p tag with "spud".
$("p").text(function(){
  return $(this).text().replace("Pug", "spud").replace("pug", "spud")
})



// ----------------------------------------------------------------------
// [Lab] Wiki Hacker

// Go to the Wikipedia page on Pugs. Open up a console, and hack away with JavaScript:

//   1.  Change the title of the article to your name.
//   2.  Hide the body of the article
//   3.  Replace the Wikipedia logo with another picture

// Don't forget to save your code. You might get picked for the stage!

// Stretch
//   1.  Replace the word "pug" in every  p tag with "spud".


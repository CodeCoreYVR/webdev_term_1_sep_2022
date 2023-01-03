// Labs
// 1.  Get the href attribute of the first link on the page.
$('a:first-child').attr('href');

// 2.  Get the number of links on this page.
$('a').length;

// 3.  Change the text for all links to be your name.
$('a').html('Insert Your Name')

// 4.  Make Craigslist's logo link to http://www.google.com
$("a.header-logo").attr('href','https://www.google.com')

// 5.  Make of all the text use the Papyrus font.
$('*').css('font-family', 'Papyrus')


// Stretch
// 1.  Make the event calendar alternate the background colour of 
//     each day square like a chess board.
$('td').each(function(count = 0){
  if(count % 2 == 0) { 
    $(this).css('background-color', 'blue')
    count++
  } else {
    $(this).css('background-color', 'red')
    count--
  }
})

// 2.  Remove all p and a nodes that contain the substring "es"

$('p, a').html().each(function(){
  if($(this).text().includes('es')){
    $(this).remove()
  }
})


// --------------------------------------------------------------
// [Lab] Craigslist Hacker

// Go to Vancouver's Craiglist page and hack away with JavaScript:
//   1.  Get the href attribute of the first link on the page.
//   2.  Get the number of links on this page.
//   3.  Change the text for all links to be your name.
//   4.  Make Craigslist's logo link to http://www.google.com
//   5.  Make of all the text use the Papyrus font.

// Stretch
//   1.  Make the event calendar alternate the background colour of 
//       each day square like a chess board.
//   2.  Remove all p and a nodes that contain the substring "es"


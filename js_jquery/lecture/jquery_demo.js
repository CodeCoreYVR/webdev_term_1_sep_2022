// let newHeader = prompt("Please provide a new header for the page");

// $('h1').text(newHeader);
$('body').append('<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi a, assumenda atque id nobis autem! Fuga dolorum voluptates tempora, a ipsum sunt facere aperiam, excepturi dolorem obcaecati nam consequuntur provident.</p>')


// exercise solution

// Loop to add class with paragraph-n
for(i=0; i<3; i++){
  let hobby = prompt("Enter one of your hobbies")
  $('body').append(`<p class="paragraph-${i+1}"> One of your hobbies is ${hobby}</p>`)
}


// code for header to slides up and down connstantly
$(function(){
  setInterval(() => {
    $('h1').slideUp(3000).slideDown(2000)
  });
})

// code for paragraphs to fade in and out constantly but at different rates
$(function(){
  setInterval(() => {
    $('.paragraph-1').fadeOut(1000).fadeIn(1000);
    $('.paragraph-2').fadeOut(2000).fadeIn(1000);
    $('.paragraph-3').fadeOut(3000).fadeIn(1000);
  });
})

// another solution below (not wrapped in $(function()))

// setInterval(() => { $('#header').slideUp(2000).slideDown(2000) }, 0)

// for (let i = 0; i < 3; i++) {
//   let input = prompt("Please enter your favorite hobby:");
//   $("body").append(`<p id=${i}>` + input + `</p>`);
// };

// setInterval(() => { $("#0").fadeOut(2000).fadeIn(2000) }, 0);

// setTimeout(() => { setInterval(() => { $("#1").fadeOut(2000).fadeIn(2000) }, 0) }, 500);

// setTimeout(() => { setInterval(() => { $("#2").fadeOut(2000).fadeIn(2000) }, 0) }, 1000);

$(document).ready(function(){
  // follow the clicks - header should move wherever we click
  $("html").click(function(event){
    $("#header").animate({
      top: (event.pageY - 25),
      left: (event.pageX - 100)
    });
  });
});
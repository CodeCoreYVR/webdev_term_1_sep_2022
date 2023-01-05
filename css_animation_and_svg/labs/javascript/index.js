$(document).ready(function(){
  // follow the clicks - header should move wherever we click
  $("html").click(function(event){
    $("#header").animate({
      top: (event.pageY - 25),
      left: (event.pageX - 100)
    });
  });

  // create an animation - h1 tag should move in square pattern
  const coords = [[0,50], [200,50], [200,250], [0,250]]
  let state = 0;
  let clicks = 0;

  const intervalID = setInterval(function(){
    $("#square").animate({
      marginLeft: coords[state][0],
      marginTop: coords[state][1]
    })
    state < 3 ? state++ : state = 0;
  }, 1100 - 100*clicks)

});
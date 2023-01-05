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

  // // cancel an animation - click button to cancel animation
  // // commented out for next question
  // $("#square").click(function(event){
  //   clearInterval(intervalID);
  // });

  // click a header game - clicking header speeds it up and increases counter. player wins at 10 clicks
  $("#square").click(function(event){
    console.log(clicks);
    if (clicks < 10) clicks++;
    else {
      clearInterval(intervalID);
      $("#square").text("You Win!");
    }
  });

});
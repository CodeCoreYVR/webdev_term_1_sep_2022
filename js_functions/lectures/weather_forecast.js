const weatherForecast = function(weather) {
  if (weather === "snowy") {
    console.log(`It's ${weather} today, you should snowboard today!`)
  } else if (weather === "thundering") {
    console.log(`It's ${weather} today, you should stay in and watch a movie!`)
  } else if (weather === "rainy") {
    console.log(`It's ${weather} today, you should Netflix and chill!`)
  } else if (weather === "sunny") {
    console.log(`It's ${weather} today, you should go outside and eat ice cream!`)
  } else {
    console.log(`It's ${weather} today. Have a good day :)`)
  }
}

weatherForecast("hot")

// shorthand version

// function weatherForecast(weather) {
//   if (weather === "snowy") {
//     console.log(`It's ${weather} today, you should snowboard today!`)
//   } else if (weather === "thundering") {
//     console.log(`It's ${weather} today, you should stay in and watch a movie!`)
//   } else if (weather === "rainy") {
//     console.log(`It's ${weather} today, you should Netflix and chill!`)
//   } else if (weather === "sunny") {
//     console.log(`It's ${weather} today, you should go outside and eat ice cream!`)
//   } else {
//     console.log(`It's ${weather} today. Have a good day :)`)
//   }
// }

// weatherForecast("hot")

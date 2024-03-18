
// const weatherForecast = (city, weather) => {
//    weather = weather !== undefined ?  weather : 'Nice weather!'
//   return `Forecast for vity ${city}: ${weather}`
   
// }



const weatherForecast = (city, weather = 'Nice weather!') => {
  return `Forecast for vity ${city}: ${weather}`
   
}



console.log(weatherForecast('Dubai', 'Sunny'))

console.log(weatherForecast('London', 'Sometimes rains'))

console.log(weatherForecast('Paris'))

console.log(weatherForecast('Miami', ''))

console.log(weatherForecast('Las Vegas', undefined))

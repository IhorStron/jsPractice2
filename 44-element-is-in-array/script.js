
const transports = ['Bus', 'Car', 'Bicycle', 'Airplane']

const isElementInArray = (inputArray, searchElement) => {
   return inputArray.includes(searchElement)
}

console.log(isElementInArray(transports, 'Bus'))
console.log(isElementInArray(transports, 'Phone'))
console.log(isElementInArray(transports, 'Airplane'))

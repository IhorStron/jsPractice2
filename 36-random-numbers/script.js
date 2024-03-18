const MIN = 1000
const MAX = 9999

const myNumbers = [2355, 7235, 8135, 1762, 2361, 8351]

const randomNumber = (min, max) => {
   return Math.floor(Math.random() * (max - min + 1) + min)
}

console.log(randomNumber(MIN, MAX))

const addRandomNumberToArray = (arr, min, max) => {
   let newRandomNumber
   const updatedArr = [...arr]

   do { 
      newRandomNumber = randomNumber(min, max)
   } while (updatedArr.includes(newRandomNumber))

   updatedArr.push(newRandomNumber)

   return updatedArr
}

const updatedArray = addRandomNumberToArray(myNumbers, MIN, MAX)

console.log('UPDATED ARRAY', updatedArray)
console.log('ORIGINAL ARRAY', myNumbers)
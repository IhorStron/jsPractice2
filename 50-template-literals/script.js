
const templateLiteral = (num) => {
   if (num < 10) {
      return (`Number ${num} is less than 10\nsquare root: ${Math.sqrt(num)}`)
   }

   if (num >= 10) {
      return (`Number ${num} is greater than or equal to 10\nsquare root: ${Math.sqrt(num)}`)
   }


}



const myNumber = 9
console.log(templateLiteral(myNumber))


const myAnotherNumber = 25
console.log(templateLiteral(myAnotherNumber))




const pushIfUnique = (inputArray, newElement) => {
   if (inputArray.includes(newElement)) {
      console.log(newElement + ' is on array')
      return
   }
   
   inputArray.push(newElement)
   
}

const myNumbers = [123, 50, 27]

pushIfUnique(myNumbers, 50)
console.log(myNumbers)

pushIfUnique(myNumbers, 80)
console.log(myNumbers)

pushIfUnique(myNumbers, 80)
console.log(myNumbers)

pushIfUnique(myNumbers, 77)
console.log(myNumbers)
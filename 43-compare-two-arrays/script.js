const areArrayIsEqual = (firstArray, secondArray) => {
   if (firstArray.lenght === secondArray.lenght
      &&
      firstArray.every((element, index) => element === secondArray[index])
   ) {
      return true
   }

   return false
}


const a = [1, 2, 3]
const b = [1, 2, 3]

console.log(a === b)

const c = [2, 1, 3]
const d = [1, 2, 3, 4]

console.log(areArrayIsEqual(a, b))
console.log(areArrayIsEqual(a, c))
console.log(areArrayIsEqual(a, d))
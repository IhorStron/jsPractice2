// function isArrayEmpty(inputArray) {
//    if (inputArray.length > 0) {
//       return 'array dont empty'
//    } else {
//       return 'array empty'
//    }
// }

// console.log(isArrayEmpty([1, 3]))

// function isArrayEmpty(inputArray) {
//    if (inputArray.length > 0) {
//       return 'array dont empty'
//    }

//    return 'array empty'
// }

// console.log(isArrayEmpty([1, 3]))

// function isArrayEmpty(inputArray) {
//    return inputArray.length > 0
//       ? 'array dont empty'
//       : 'array empty'
// }


// let isArrayEmpty = (inputArray) => {
//    if (inputArray.length > 0) {
//       return 'array dont empty'
//    } else {
//       return 'array empty'
//    }
// }


const isArrayEmpty = (inputArray) =>
   inputArray.length > 0
      ? 'array dont empty'
      : 'array empty'

console.log(isArrayEmpty([1, 3]))
console.log(isArrayEmpty([]))



const objectWithNumbers = {
   x: 5,
   y: 20,
   z: 3,
}

// const mult = ({x, y, z) => {
//    return x * y * z
// }



// const mult = ({x, y, z) => x * y * z
   


const mult = (nums) => {
   const {x, y, z} = nums
   return x * y * z
}
   
   
const result = mult(objectWithNumbers)
console.log(result)
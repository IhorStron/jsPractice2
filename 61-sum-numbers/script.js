
function sumNumbers() {
   let result = 0
   let i = 0

   for(i; i < arguments.length; i++) {
      result += arguments[i];
   }

   return result;
}

console.log(sumNumbers(1, 3))

console.log(sumNumbers(10, 20, 5))

console.log(sumNumbers(2, 5, 80, 1, 10, 12))
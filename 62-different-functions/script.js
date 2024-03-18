
// Function can be called before declaration
// console.log(firstFunction(2, 3))
function firstFunction(a, b) {
   return a + b
}
// We can assign new value
// firstFunction = '123'
// console.log(firstFunction)



// Cannot access 'secondFunction' before initialization
// secondFunction(2, 7)
const secondFunction = function (a, b) {
   return a + b
}
// New value can't be assign
// secondFunction = true


console.log(firstFunction(5, 5))

console.log(secondFunction(3, 3))
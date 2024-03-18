

function square(a) {
   // if (a === undefined) {
   //    throw new Error('Function "square" cannot be specified without an argument')
   // }
   // console.log(a * a)

   if (arguments.length === 0) {
      throw new Error('Function "square" cannot be specified without an argument')
   }
   console.log(a * a)
}

square(10)

square()
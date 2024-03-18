
let i = 1

const intervalId = setInterval(() => {
   console.log('message number ' + i)
   i++
   


   if (i === 6) {
      clearInterval(intervalId)
   } 
}, 2000)


// let i = 1

// const messageIntervalId = setInterval(() => {
//    console.log('message number ' + i)
//    i = i + 1
// }, 2000)
 
// setTimeout(() => clearInterval(messageIntervalId), 11000)
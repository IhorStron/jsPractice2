

let vowelsCount = 0
const vowels = ['a', 'e', 'i', 'o', 'u']

const str = 'Today is the best day of my life'

// //Option 1
// str.split('').forEach((char) => {
//    if (vowels.includes(char)) {
//       vowelsCount += 1
//    }
// })

//Option 2
for (const char of str) {
   if (vowels.includes(char)) {
      vowelsCount += 1
   }
}


console.log(vowelsCount)
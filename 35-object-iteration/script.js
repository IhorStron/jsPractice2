const myObject = {
   key1: true,
   key5: 10,
   key3: 'abc',
   key4: null,
   key10: NaN,
}

const objectKeys = Object.keys(myObject)

objectKeys.forEach((element) => {
   if (element === 'key1' || element === 'key3') {
      console.log(myObject[element])
   }
})



console.log()
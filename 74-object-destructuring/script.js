

const person1 = {
   name: 'Mike',
   info: {
      country: 'Spain',
      age: 23,
   },
   postsQuantity: 100,
}

const person2 = {
   name: 'Alice',
   info: {
      country: 'Italy',
      age: 25,
   },
}


const shortPerson = (person) => {
   const {name: n, info: {country: c, age: a}, postsQuantity: p = 0 } = person
   return {
      n,
      c,
      a,
      p
   }
}


console.log(shortPerson(person1))

console.log(shortPerson(person2))







// const personInfo = (person) => {
//    const { name, age: personAge, location: { country: origin, city: homeCity }, friendsQty = 0, createdAtYear = new Date().getFullYear() } = person
//    return {
//       name,
//       personAge,
//       origin,
//       homeCity,
//       friendsQty,
//       createdAtYear
//    }
// }


// const person = {
//    name: 'Alice',
//    age: 19,
//    location: {
//       country: 'England',
//       city: 'London',
//    },
// }

// const result = personInfo(person)

// console.log(result)
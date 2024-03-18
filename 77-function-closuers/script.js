

const createGreeting = () => {
   let greetingString = 'Hey, this is'

   function greet(name) {
      return `${greetingString} ${name}`
   }

   function changeGretting(nweGreeting) {
      greetingString = nweGreeting
   }

   return {
      greet,
      changeGretting,
   }
}

const greeting1 = createGreeting()

console.log(greeting1.greet('Bob'))


greeting1.changeGretting('Good Morning from')

console.log(greeting1.greet('Emily'))



const greeting2 = createGreeting()

console.log(greeting2.greet('Emily'))
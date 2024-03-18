



let person = {
   _id: '5asdsad7as9asd9dsa8',
   index: 4,
   processed: false,
   cart: ['item1', 'item2', 'item3'],
   email: 'vdsvsd@gmail.com',
   name: 'Samanta Larsen',
   cartId: 435,
}


{
   let _id, processed, cart;({ _id, processed, cart, ...person } = person )
   console.log(_id, processed, cart)
}

console.log(person)


// const { _id, processed, cart, ...rest } = person
// console.log(rest)








 
 


const cars = [
   {brand: 'Honda', price: 13000},
   {brand: 'Rolls-Royce', price: 120000},
]


const carInfo = ({brand, price}) => {
   return `Car price ${brand} - ${price}$ and this is a ${price > 20000 ? 'expencive' : 'cheap'} car`
}


cars.forEach((car) => console.log(carInfo(car)))
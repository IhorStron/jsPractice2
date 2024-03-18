const cars = [
   {carBrand: 'BMW', price: 50000, isAvaibleForSale: true},
   {carBrand: 'Volvo', price: 40000, isAvaibleForSale: true},
   {carBrand: 'Mazda', price: 20000, isAvaibleForSale: false},
]

cars.push({carBrand: 'Opel', price: 5000, isAvaibleForSale: false})

console.log(cars[1].carBrand)
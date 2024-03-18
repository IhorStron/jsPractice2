

const myCities = ['London', 'New York', 'Singapore']



// function cityInfo(myCities, index) {
//    console.log(myCities + ' is at the index ' + index + ' in the myCities array');
// }

// const cityInfo = (myCities, index) => {
//    console.log(myCities + ' is at the index ' + index + ' in the myCities array')
// }

// myCities.forEach(cityInfo);

const cityInfo = (city, index) =>
`${city} is at the index ${index} in the myCities array`

myCities.forEach((city, index) => console.log(cityInfo(city, index)))


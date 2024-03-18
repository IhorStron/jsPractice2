

const a = [1, 2, 3]

const b = [...a]

// const b = Array.from(a)

// const b = JSON.parse(JSON.stringify(a))

b.push('newElement')

console.log(a)


console.log(b)
const helloWorld = () => {
   console.log('Hello world!')
}

setTimeout(helloWorld, 5000)

setTimeout(() => console.log('Hello world!'), 7000)
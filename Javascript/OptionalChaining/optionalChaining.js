const adventurer = {
  name: 'Alice',
  cat: {
    name: 'Dinah'
  }
}

console.log(adventurer.dog.name) // error: Uncaught TypeError: Cannot read property 'name' of undefined
console.log(adventurer.dog?.name) // expected output: undefined

console.log(adventurer.someNonExistentMethod?.())
// expected output: undefined

/*
    Reducer to sum numbers from array example
*/

let arr = [1,2,5,7]

//add
let a = arr.reduce((acc, item) => acc + item, 1)
console.log(a)

// ---------------------------------------------------------------------------------------------------------------------------------


// Split 

//const word = 'hello world'
//const letters = word.split('')
//console.log(letters) // [ 'h', 'e', 'l', 'l', 'o', ' ', 'w', 'o', 'r', 'l', 'd' ]

// Join

//const letters = ['h', 'e', 'l', 'l', 'o', ' ', 'w', 'o', 'r', 'l', 'd']
//const res = letters.join('')
//console.log(res) // hello world

// Slice

const word = 'hello mi name is hil'
const res = word.slice(0,5)

console.log(res) // hello
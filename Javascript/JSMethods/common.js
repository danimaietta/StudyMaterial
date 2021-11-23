/* Common methods */

// Global variables
let wordArray = ['w', 'o', 'r', 'd']
let word = 'word'
let numberArray = ['1', '2', '3']

/*
 split
*/
console.log(word.split('')) // ["w", "o", "r", "d"]
console.log(word.split('o')) // ["w", "rd"]

/*
 join 
*/
console.log(wordArray.join('')) // word

/*
  reverse
*/
console.log(wordArray.reverse()) // ["d", "r", "o", "w"]

/*
  push
*/
numberArray.push('4')
console.log(numberArray) // ['1','2','3','4']

/*
  pop
*/
console.log(numberArray.pop()) // 4
console.log(numberArray) // ["1", "2", "3"]

/*
  slice
*/
console.log(wordArray.slice()) // ["d", "r", "o", "w"]  -- usefull for copying arrays
console.log(wordArray.slice(1)) // ["r","o","w"]
console.log(wordArray.slice(-1)) // ["w"]
console.log(wordArray.slice(2)) // ["o", "w"]

/*
  unshift
*/
console.log(wordArray.unshift('The')) // ["The","w","o","r","d"]

/*
  for of
*/
// for of go over items of arrays
let animals = ['🐔', '🐷', '🐑', '🐇']
let names = ['Gertrude', 'Henry', 'Melvin', 'Billy Bob']

for (let animal of animals) {
  let nameIdx = Math.floor(Math.random() * names.length)
  console.log(`${names[nameIdx]} the ${animal}`) // Melvin the 🐔   Melvin the 🐷   Henry the 🐑   Billy Bob the 🐇
}

/*
  for in
*/
// for in go over properties in objets
let oldCar = {
  make: 'Toyota',
  model: 'Tercel',
  year: '1996'
}

for (let key in oldCar) {
  console.log(`${key} --> ${oldCar[key]}`) // make --> Toyota   model --> Tercel   year --> 1996
}

/*
  assign
*/
var obj = { a: 1, b: 2, c: { d: 3, e: 4 } }
var objclone = Object.assign({}, obj)
console.log(objclone) // {a: 1 ,b: 2, c: { d: 3, e:4}}

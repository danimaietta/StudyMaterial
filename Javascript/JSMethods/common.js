/* Common methods */ 

// split
let word = "word"
console.log("word.split('')", word.split(''))
console.log("word.split('o')", word.split('o'))

// join // reverse
let wordArray = ['w','o','r','d']
console.log("['w','o','r','d'].reverse()", wordArray.reverse())
console.log("['w','o','r','d'].join('')", wordArray.join(''))

// ----------------------------------------------------------------------------------------------

/*
  for of  vs  for in
*/

// for of go over items of arrays
let animals = ['🐔', '🐷', '🐑', '🐇'];
let names = ['Gertrude', 'Henry', 'Melvin', 'Billy Bob'];

for (let animal of animals) {
  let nameIdx = Math.floor(Math.random() * names.length);
  console.log(`${names[nameIdx]} the ${animal}`);
}

// for in go over properties of objets
let oldCar = {
  make: 'Toyota',
  model: 'Tercel',
  year: '1996'
};

for (let key in oldCar) {
  console.log(`${key} --> ${oldCar[key]}`);
}
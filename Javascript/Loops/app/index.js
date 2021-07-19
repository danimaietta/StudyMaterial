/*
    Loops
*/

const array = ['👻', '👽', '👾', '🤖', '🎃']

// normal for
for (let i = 0; i < array.length; i++) {
  console.log('normal for: ', array[i]) // 👻 👽 👾 🤖 🎃
}

// for in
// it iterates an object
const obj = {
  prop1: 1,
  prop2: 2,
  prop3: 3
}

for (let prop in obj) {
  console.log('for in: ', obj[prop]) // 1 2 3
}

// for of
// shorted version of a normal for
for (let emoji of array) {
  console.log('for of: ', emoji) // 👻 👽 👾 🤖 🎃
}

// do while
// makes the comparation at the end
let i = 0
do {
  console.log('do while: ', array[i]) // 👻 👽 👾 🤖 🎃
  i++
} while (i < array.length)

// while
// makes the comparation at the beginning
i = 0
while (i < array.length) {
  console.log('while: ', array[i]) // 👻 👽 👾 🤖 🎃
  i++
}

// map
// returns an array depending of what the callback return
console.log(
  'map: ',
  array.map((emoji, i) => emoji + i)
) // [👻0, 👽1, 👾2, 🤖3, 🎃4]

// filter
// returns an array
console.log(
  'filter: ',
  array.filter(emoji => emoji === '🎃' || emoji === '👽')
) // [🎃, 👽]

// reduce
console.log(
  'reduce: ',
  array.reduce((accumulator, emoji) => accumulator + emoji, '')
) // 👻 👽 👾 🤖 🎃

// find
// return the value of the 1st condition it pass
console.log(
  'find: ',
  array.find(emoji => emoji === '🎃')
) // 🎃

// forEach
// faster than map but it doesn't return an array
array.forEach((emoji, i) => console.log('forEach: ', emoji, i)) // 👻 0 👽 1 👾 2 🤖 3 🎃 4

/*
    forEach vs map
*/

const res1 = [1, 2, 3, 4, 5].forEach(x => x * 2)
console.log('forEach vs map: ', res1) // undefined

const res2 = [1, 2, 3, 4, 5].map(x => x * 2)
console.log('forEach vs map: ', res2) // [2, 4, 6, 8, 10]

/*
    Ways to 
*/

/*
    break
    continue
    empty
*/

/*
    Loops
*/

const array = ['👻','👽','👾','🤖','🎃']

// normal for
console.log("normal for: ")
for(let i=0; i<array.length; i++){
    console.log(array[i]) // 👻 👽 👾 🤖 🎃
}

// for in
// it iterates an object
console.log("for in: ")
const obj = {
    prop1: 1,
    prop2: 2,
    prop3: 3
}

for(prop in obj){
    console.log(obj[prop]) // 1 2 3
}

// for of
// shorted version of a normal for
console.log("for of: ")
for(emoji of array){
    console.log(emoji) // 👻 👽 👾 🤖 🎃
}

// do while
// makes the comparation at the end
console.log("do while: ")
let i = 0
do{
    console.log(array[i]) // 👻 👽 👾 🤖 🎃
    i++
}while(i < array.length)

// while
// makes the comparation at the beginning
console.log("while: ")
i = 0
while(i < array.length){
    console.log(array[i]) // 👻 👽 👾 🤖 🎃
    i++
}

// map
// returns an array depending of what the callback return
console.log("map: ")
console.log(array.map((emoji, i) => emoji + i)) // [👻0, 👽1, 👾2, 🤖3, 🎃4]

// filter
// returns an array 
console.log("filter: ")
console.log(array.filter(emoji => emoji === '🎃' || emoji === '👽')) // [🎃, 👽]

// reduce
console.log("reduce: ")
console.log(array.reduce((accumulator, emoji) => accumulator + emoji, '')) // 👻 👽 👾 🤖 🎃

// find
// return the value of the 1st condition it pass
console.log("find: ")
console.log(array.find(emoji => emoji === '🎃')) // 🎃

// forEach
// faster than map but it doesn't return an array
console.log("forEach: ")
array.forEach((emoji, i) => console.log(emoji, i)) // 👻 0 👽 1 👾 2 🤖 3 🎃 4


/*
    forEach vs map
*/

console.log("forEach vs map: ")

const res1 = [1,2,3,4,5].forEach(x => x * 2)
console.log(res1) // undefined

const res2 = [1,2,3,4,5].map(x => x * 2)
console.log(res2) // [2, 4, 6, 8, 10]


/*
    Ways to 
*/

/*
    break
    continue
    empty
*/
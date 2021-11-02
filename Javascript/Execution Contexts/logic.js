/*****  Execution Context *****/

// 1- Creation Phase

/*
  1. Create a global object.
  2. Create an object called “this”.
  3. Set up memory space for variables and functions.
  4. Assign variable declarations a default value of “undefined” while placing any function declarations in memory. - Hoisting
*/

// 2- Execution Phase
// It just assign values lol

// Function Creation Phase

/*
  1. Create an arguments object.
  2. Create an object called this.
  3. Set up memory space for variables and functions.
  4. Assign variable declarations a default value of “undefined” while placing any function declarations in memory. - Hoisting
*/

// Execution stack = many function creation
/*
 * Any function has his own execution context
 * Finish in the execution phase
 * When you create many it is a stack
 *
 */

/* Event Loop */

console.log('First')

setTimeout(function () {
  console.log('Second')
}, 0)

fourthMethod(function () {
  console.log('Fourth')
})

console.log('Third')

function fourthMethod(callback) {
  callback()
}

/* Var vs Let */

function method() {
  for (let i = 0; i < 5; i++) {
    console.log('inside for')
  }
  //console.log('This will throw a Referece error: ' + i)
}

method()

/* Class in es5 */

function Animal(name, energy) {
  this.name = name
  this.energy = energy

  Animal.prototype.eat = function () {
    energy += 1
    console.log(`${name} is eating and his remaining energy is: ${energy}`)
  }

  Animal.prototype.run = function () {
    energy -= 1
    console.log(`${name} is running and his remaining energy is: ${energy}`)
  }
}

let dog = new Animal('figo', 5)
dog.eat()
dog.run()

/* No Repeat array*/

/*let array = [1,2,3,4,5,1,3,5]
console.log(array)*/

/* Object Spread Operator*/

/*const person = {
  name: "Daniel",
  age: 24,
  address: {
    city: "Heredia",
    street: "Los Lagos"
  }
}

const {name, ...rest} = person

console.log(rest)

function consoleUser({name = "Jose",age, ...rest}){
  const monster = {name: name}
  console.log("name: "+name)
  console.log(rest)
  return {...monster, rest}
}

const monster = consoleUser(person)
console.log(monster.name)*/

/* this inside functions */

/*function a(){
  this.a = "a"
}

a()

console.log(a)

var b = () => {
  this.c = "c"
}

b()

console.log(this.c)*/

/* array methods */

/*var items = [
  {name: "fists", power: 4},
  {name: "axe", power: 10},
  {name: "baseball with nails", power: 12},
  {name: "shotgun", power: 40},
  {name: "mossin", power: 70},
  {name: "knife", power: 9},
  {name: "hand-gun", power: 30}
]

//const results = items.slice(1,1)
const result = items.sort((a,b) => a.name > b.name)

console.log(items)*/

/* Calling arguments inside a function that no recibes arguments 
  using from array method */

/* function sumArgs(){
  console.log(arguments)
  console.log(Array.from(arguments))
}

sumArgs(1,2,3,4,5)*/

/* typeof [] */

/* function double */

function double(array) {
  return array.map(item => item * 2)
}

console.log(double([1, 2, 3, 4]))

/* add function */

function add(array) {
  return array.reduce((result, item) => result + item, 0)
}

console.log(add([1, 2, 3]))

/* Anonymous function variables without declaration has global scope */
;(function () {
  anonymous = 'Anonymous function'
})()

console.log(anonymous)

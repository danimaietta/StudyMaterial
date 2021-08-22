/* **********************************
        ARRAY DESTRUCTURING
*********************************** */

/*
    ...iterable
    an iterable is an array, a string, any varialble that has lenght
    ... gets the content of the array
*/

var arr = [1, 2, 'pepe', 4, 5]
console.log(...arr) // 1 2 pepe 4 5

// it is useful to gather arrays

var arr1 = [1, 2, 3, 4, 5]
var arr2 = [6, 7, 8, 9, 10]
var arr3 = [...arr1, ...arr2]
console.log(arr3) // [1 2 3 4 5 6 7 8 9 10]

// mas util aun utilizarlo para tener un array los parametros de un metodo
// is useful

var parametros = ['Dani', 25, 1.68]

function presentation(name, age, height) {
  console.log(`my name is ${name}, im ${age} years old and im ${height}m tall`)
}

presentation(...parametros) // my name is Dani, im 25 years old and im 1.68m tall

/*
    if we want the values in the array as variables without destructuring
*/

var person = ['Dani', 25, 1.68]
var name = person[0]
var age = person[1]
var height = person[2]
console.log(name, age, height) // Dani 25 1.68

/*
    with array destructuring 
*/

var [name, age, height] = ['Dani', 25, 1.68]
console.log(name, age, height) // Dani 25 1.68

/*
    if we want to destructure the arguments, without array destructuring
*/

var arr = ['Dani', 25]

function info(arr) {
  // aqui se destructura
  var name = arr[0]
  var age = arr[1]
  console.log(`name: ${name}, age: ${age}`)
}

info(arr) // name: Dani, age: 25

/*
    with array destructuring 
*/

var arr = ['Dani', 25]

function info([name, age]) {
  // here it destructures
  console.log(`name: ${name}, age: ${age}`)
}

info(arr) // name: Dani, age: 25

/*
    array destructuring with default values
*/

var arr = [undefined, 25]

function info([name = 'Dani', age = 30]) {
  //  here it destructures
  console.log(`name: ${name}, age: ${age}`)
}

info(arr) // name: Dani, age: 25

/* **********************************
        OBJECT DESTRUCTURING
*********************************** */

/*
    ...object
*/

const obj1 = { a: 1, b: 2 }
const obj2 = { a: 2, c: 3, d: 4 }
const obj3 = { ...obj1, ...obj2 }

console.log(obj3) // { a:2, b:2, c:3, d:4 }

/*
    normal destructuring
*/

var person = {
  name: 'Dani',
  age: 25,
  saludar: () => 'hi'
}

var { name, age, saludar } = person
console.log(name, age, saludar()) // Dani 25 hi

/*
    if we want to send the properties of the object by arguments
*/

var person = {
  name: 'Dani',
  age: 25
}

function info({ name, age }) {
  console.log(`name: ${name}, age: ${age}`)
}

info(person) // name: Dani, age: 25

/*
    we can define the arguments by default
*/

function info({ name = 'Dani', age = 25 }) {
  console.log(`name: ${name}, age: ${age}`)
}

info({}) // name: Dani, age: 25

/*
    if it recieves the 1st value but not the 2nd
*/

var person = {
  name: 'Dani'
}

function info({ name = 'Dani', age = 25 }) {
  console.log(`name: ${name}, age: ${age}`)
}

info(person) // name: Dani, age: 25

/* 
    what happens if there is an object inside another object and we want to destructure it?
*/

var person = {
  data: {
    name: 'Dani',
    age: 25
  }
}

const {
  data: { name, age }
} = person
console.log(name, age) // Dani 25

// this is one visible better way to do it

const { name, age } = person.data
console.log(name, age) // Dani 25

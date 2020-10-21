/* **********************************
        ARRAY DESTRUCTURING
*********************************** */

/*
    ...iterable
    un iterable es un arreglo, un string, cual variable que posea lenght
    ... obtiene el contenido del array
*/

var arr = [1,2,"pepe",4,5]
console.log(...arr) // 1 2 pepe 4 5

// es util para juntar arrays

var arr1 = [1,2,3,4,5]
var arr2 = [6,7,8,9,10]
var arr3 = [...arr1, ...arr2]
console.log(arr3) // [1 2 3 4 5 6 7 8 9 10]

// mas util aun utilizarlo para tener un array los parametros de un metodo

var parametros = ["Dani", 25, 1.68]

function presentation(name, age, height){
  console.log(`my name is ${name}, im ${age} years old and im ${height}m tall`)
}

presentation(...parametros) // my name is Dani, im 25 years old and im 1.68m tall

/*
    if we want the values in the array as variables
    sin destructurar
*/

var person = ['Dani', 25, 1.68]
var name = person[0]
var age = person[1]
var height = person[2]
console.log(name, age, height) // Dani 25 1.68

/*
    con array destructuring 
*/

var [name, age, height] = ['Dani', 25, 1.68]
console.log(name, age, height) // Dani 25 1.68

/*
    si queremos destructurar en los parametros,=
    sin destructurar
*/

var arr = ["Dani", 25]

function info(arr){ // aqui se destructura
  var name = arr[0] 
  var age = arr[1]
  console.log(`name: ${name}, age: ${age}`)
}

info(arr) // name: Dani, age: 25

/*
    con array destructuring 
*/

var arr = ["Dani", 25]

function info([name, age]){ // aqui se destructura
    console.log(`name: ${name}, age: ${age}`)
}

info(arr) // name: Dani, age: 25

/*
    array destructuring con valores por defecto
*/

var arr = [undefined, 25]

function info([ name="default", age=30 ]){ // aqui se destructura
    console.log(`name: ${name}, age: ${age}`)
}

info(arr) // name: default, age: 25

/* **********************************
        OBJECT DESTRUCTURING
*********************************** */

/*
    ...object
*/

const obj1 = { a: 1, b: 2 }
const obj2 = { a: 2, c: 3, d: 4}
const obj3 = {...obj1, ...obj2}

console.log(obj3) // { a:2, b:2, c:3, d:4 }

/*
    normal destructuring
*/

var person = {
    name: "Dani",
    age: 25,
    saludar: () => 'hi'
 }
  
var {name, age, saludar} = person
console.log(name, age, saludar()) // Dani 25 hi

/*
    si se quiere enviar las propiedades del objeto por parametro
*/

var person = {
    name: "Dani",
    age: 25
}

function info({name, age}){
    console.log(`name: ${name}, age: ${age}`)
}

info(person) // name: Dani, age: 25

/*
    se pueden definir parametros por defecto
*/

function info({name = 'Dani', age = 25}){
    console.log(`name: ${name}, age: ${age}`)
}
  
info({}) // name: Dani, age: 25

/*
    si recibe un valor y el otro no
*/

var person = {
    name: "Dani"
}
    
function info({name = 'Dani', age = 25}){
    console.log(`name: ${name}, age: ${age}`)
}

info(person) // name: Dani, age: 25

/* 
    que pasa si hay un objeto dentro un objeto y queremos destructurar?
*/

var person = {
    data: {
      name: "Dani",
      age: 25
    }
}
  
const { data: { name, age } } = person
console.log(name, age) // Dani 25

// esta es una forma visualmente mejor de hacerlo

const { name, age } = person.data
console.log(name, age) // Dani 25

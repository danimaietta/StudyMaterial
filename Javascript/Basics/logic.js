/*
    Copy and paste the pieces of code right here: https://playcode.io/
    to see results
*/

console.log('hi')

/* **********************
        VARIABLES
********************** */

var ejemplo // declaration
ejemplo = "texto de ejemplo" // initialization

var name = "Daniel" // String
name = "Felipe"
console.log(name) // Felipe
var age = 25 // Integer
var masculine = true // Boolean
var child = null // Null
var message // Undefined (no specificied value)

// concatenation
var texto = "hello " + "world"
console.log("The text says: " + texto) // hello world

// operations
var resultado = 10 * 10 / 2 + 5
console.log(resultado) // 55

// overwrite a variable
var sum = 10
sum = sum + 10
console.log(sum)


/* **********************
        ARRAYS
********************** */

var emptyArray = [] // new Array()

var names = ["Felipe", "Daniel", "Juan", "Jason"]
var numbers = [1, 4, 6, 3, 99, 120]
var booleans = [true, false, false, true, false]

names[2] = "Peter"
console.log(names) // ["Felipe", "Daniel", "Peter", "Jason"]

// Bad Practice
var nono = [1, "esto no se hace", 2]

// Accessing the value of an array
console.log("names[0]", names[0]) // Felipe
console.log("names[1]", names[1]) // Daniel


/* **********************
        OBJECTS
********************** */

var objetoVacio = {} // new Object()

var person = {
    name: "Felipe",
    age: 25,
    masculine: true,
    mains: ["Teemo", "Yasuo", "Soraka"],
    car: {
        brand: "Tesla",
        wheels: 4,
    },
    sayHi: function(){
        console.log('Hello Everybody')
    }
}

console.log("person.name", person.name) // Felipe
console.log("person.mains[0]", person.mains[0]) // Teemo
console.log("person.car.brand", person.car.brand) // Tesla
person.sayHi() // Hello Everybody

person.age = 30
console.log(person.age) // 30


/* **********************
        FUNCTIONS
********************** */

function printName(name){
    console.log("My name is " + name) 
}
printName("Daniel") // My name is Daniel
printName("Felipe") // My name is Felipe

var printNameAndAge = function(name, age){
    return "My name is " + name + "and my age is " + age
}
console.log(printNameAndAge("Daniel", 25)) // My name is Daniel and my age is 25


/* **********************
    PRIMITIVE vs REFERENCE
********************** */

// Primitive

var one = 1
var anotherOne = one
 
anotherOne = 2
 
console.log(one) // 1
console.log(anotherOne) // 2

// Reference

var obj = {
    prop: "property"
}

var anotherObj = obj

anotherObj.prop = "anotherProperty"

console.log(anotherObj.prop) // anotherProperty
console.log(obj.prop) // anotherProperty


/* **********************
    LOGIC OPERATORS
********************** */

// Difference between == and ===

console.log("25" == 25) // true
console.log("25" === 25) // false
console.log(1 == true) // true
console.log(1 === true) // false

/*
    If else
*/

if(name == "Daniel"){
    console.log("it is Daniel")
}else if(age == 25){
    console.log("is not Daniel but he/she has the age of Daniel")
}else{
    console.log("no es Daniel")
}

if(age > 25){
    console.log("is older than Daniel")
}else{
    console.log("is younger than Daniel")
}

//    &&
if(name == "Daniel" && age == 25){
    console.log("it is Daniel")
}else{
    console.log("it's not Daniel")
}

//    ||
if(name == "Daniel" || age == 25){
    console.log("can be Daniel or someone who has 25 years old")
}else{
    console.log("it's not Daniel y neither has 25 años")
}

//    &&  and  ||
console.log(true && true) // true
console.log(true && false) // false

console.log(true || false) // true
console.log(false || false) // false

//    &&  and  ||   mixed
if(masculine == true && name == "Daniel" || age == 25){
    console.log("is Daniel or someone with 25 years and is a man")
}else{
    console.log("is a woman or a man that is not Daniel and doesn't have 25 years")
}


/*
    switch case
*/

var day

switch(new Date().getDay()) {
  case 0:
    day = "Sunday"
    break
  case 1:
    day = "Monday"
    break
  case 2:
     day = "Tuesday"
    break
  case 3:
    day = "Wednesday"
    break
  case 4:
    day = "Thursday"
    break
  case 5:
    day = "Friday"
    break
  default:
    day = "Saturday"
}

console.log(day)


/*
    For
*/

// basic for

for(var i=1; i <= 5; i++){
    console.log("This is the iteration number " + i)
}

// for with array

var carros = ["BMW", "Mercedes-Benz", "Audi", "Lexus", "Renault", "Ford"]

for(var i=0; i < carros.length; i++){
  console.log("im driving a " + carros[i])
}
/*
    Se recomienda copiar y pegar pedazos de codigo en https://playcode.io/
    para ver resultados
*/

console.log('hi')

/* **********************
        VARIABLES
********************** */

var ejemplo // declarar
ejemplo = "texto de ejemplo" // inicializar

var name = "Daniel" // String
name = "Felipe"
console.log(name) // Felipe
var age = 25 // Integer
var masculine = true // Boolean
var child = null // Null
var message // Undefined (no specificied value)

// concatenar
var texto = "hola " + "mundo"
console.log("El texto dice: " + texto) // hola mundo

// operaciones
var resultado = 10 * 10 / 2 + 5
console.log(resultado) // 55

// sobreescribir una variable
var sum = 10
sum = sum + 10
console.log(sum)


/* **********************
        ARREGLOS
********************** */

var arregloVacio = [] // new Array()

var names = ["Felipe", "Daniel", "Juan", "Jason"]
var numbers = [1, 4, 6, 3, 99, 120]
var booleans = [true, false, false, true, false]

names[2] = "Peter"
console.log(names) // ["Felipe", "Daniel", "Peter", "Jason"]

// Mala practica
var nono = [1, "esto no se hace", 2]

//Acceder al valor de un arreglo
console.log("names[0]", names[0]) // Felipe
console.log("names[1]", names[1]) // Daniel


/* **********************
        OBJETOS
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
        FUNCIONES
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
    console.log("si es Daniel")
}else if(age == 25){
    console.log("no es Daniel pero tiene la edad de Daniel")
}else{
    console.log("no es Daniel")
}

if(age > 25){
    console.log("Es mas viejo que Daniel")
}else{
    console.log("Es mas joven que Daniel")
}

//    &&
if(name == "Daniel" && age == 25){
    console.log("si es Daniel")
}else{
    console.log("no es Daniel")
}

//    ||
if(name == "Daniel" || age == 25){
    console.log("Puede ser Daniel o alguien que tenga 25 años")
}else{
    console.log("no es Daniel y tampoco tiene 25 años")
}

//    &&  and  ||
console.log(true && true) // true
console.log(true && false) // false

console.log(true || false) // true
console.log(false || false) // false

//    &&  and  ||   mixed
if(masculine == true && name == "Daniel" || age == 25){
    console.log("Es Daniel o alguien con 25 años y es hombre")
}else{
    console.log("Es una mujer o un hombre que no se llama Daniel ni tiene 25 años")
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

// for basico

for(var i=1; i <= 5; i++){
    console.log("Esta es la iteracion numero " + i)
}

// for con arreglos

var carros = ["BMW", "Mercedes-Benz", "Audi", "Lexus", "Renault", "Ford"]

for(var i=0; i < carros.length; i++){
  console.log("Estoy manejando un " + carros[i])
}
/* *********************
    EXECUTION CONTEXT
    1.Creation Phase   -   2.Execution Phase
********************* */



// Ejemplo 1   

var texto = "Texto"         // 1. texto es undefined   -   2. texto es igual a "Texto"

function imprimir(){        // 1. se crea la funcion   -   2. nada     
  console.log("mensaje")
}

imprimir()                  // 1. nada                 -   2. se ejecuta imprimir()





// Ejemplo 2

var a           // 1. a es undefined   -   2. nada
console.log(a)  // 1. nada             -   2. ejecuta console.log(a)
a = 'a'         // 1. nada             -   2. a = 'a'





// Ejemplo 3

a()                 // 1. nada   -   2. se ejecuta a()
//b()               // 1. nada   -   2. se ejecuta b()

function a(){       // 1. se crea la funcion   -   2. nada
  console.log('hoisting method a')
}

var b = function(){ // 1. b es undefined   -   2. b es igual a function(){ console.log('hoisting method b') }
  console.log('hoisting method b')
}

b()                 // 1. nada   -   2. se ejecuta b()




/* *********************
         SCOPE
********************* */


// Ejemplo 1 - Function Scope

function ejemplo(){
    var texto = "Hola Mundo"
    console.log("La variable texto es: " + texto) // La variable texto es: Hola Mundo
}

ejemplo()

console.log("La variable texto es: " + texto) // Uncaught ReferenceError: texto is not defined



// Ejemplo 2 - Block Scope

if(true){
    var a = 'a'
    let b = 'b'
}

console.log(a) // a
console.log(b) // Uncaught ReferenceError: b is not defined


// Ejemplo 3 - var vs let

// using var

var names = ['Heisenberg', 'Saul', 'Mike', 'Tuco']

function iterar(arr){
  for(var i=0; i < arr.length; i++){
    console.log(names[i]) // Heisenberg Saul Mike Tuco
  }
  // Supongamos que aqui pasa mas codigo
  console.log(i) // 4
}

iterar(names)

// using let

var names = ['Heisenberg', 'Saul', 'Mike', 'Tuco']

function iterar(arr){
  for(let i=0; i < arr.length; i++){
    console.log(names[i]) // Heisenberg Saul Mike Tuco
  }
  // Supongamos que aqui pasa mas codigo
  console.log(i) // Uncaught ReferenceError: i is not defined
}

iterar(names)

// using const

const pi = 3.14
console.log(pi) // 3.14

pi = 10 // Uncaught TypeError: Assignment to constant variable

// Good practice using const

const buenaPractica = function(){
  console.log('Esto es una buena practica')
}
  
buenaPractica()




console.log("Andre" || "Charlie") // Andre
console.log("Andre" && "Charlie") // Charlie



/*
  mixed values 
*/

console.log(4 || 2 > 3) // true
console.log(1 || 2 > 3) // false

console.log(5 && 2 > 1) // true
console.log(2 && 3 > 4) // false


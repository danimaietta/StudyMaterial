/* ****************************
        PURE FUNCTIONS
**************************** */

/********  Los 2 Mandamientos *********/
// Mismos parametros, mismos resultados
// No modifica una variable global


/*
    Funcion impura 
*/

var total = 0

const sumarTotal = function(num){
  return total = total + num // add sugar 
}

console.log(sumarTotal(10)) // 10
console.log(sumarTotal(10)) // 20
console.log(sumarTotal(10)) // 30
console.log(sumarTotal(10)) // 40

/*
    Funcion pura
*/

const sumar10 = function(num){
    return num + 10
}
  
console.log(sumar10(10)) // 20
console.log(sumar10(10)) // 20
console.log(sumar10(20)) // 30
console.log(sumar10(20)) // 30

// **********************************************************

/*
    Funcion pura con funciones Array
*/

// slice corta el array indicando el 1er and 2do indice 
var arr = [1,2,3,4,5]

console.log(arr.slice(1,4)) // [2, 3, 4]
console.log(arr.slice(1,4)) // [2, 3, 4]
console.log(arr.slice(0,1)) // [1]
console.log(arr.slice(0,1)) // [1]

/*
    Funcion impura con funciones Array
*/

// push añade un nuevo campo en el array 
var arr = [1,2,3,4,5]

arr.push(6)
console.log(arr) // [1,2,3,4,5,6]
arr.push(6)
console.log(arr) // [1,2,3,4,5,6,6]
arr.push(6)
console.log(arr) // [1,2,3,4,5,6,6,6]

// Por motivos de execution context arr.push(6) no puede ir dentro de console.log
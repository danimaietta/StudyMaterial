/* ****************************
        PURE FUNCTIONS
**************************** */

/********  The 2 Commandment *********/
// Same parameters, same results
// Does not modify global variables


/*
    Impure function
*/

var total = 0

const addTotal = function(num){
  return total = total + num // add sugar 
}

console.log(addTotal(10)) // 10
console.log(addTotal(10)) // 20
console.log(addTotal(10)) // 30
console.log(addTotal(10)) // 40

/*
    Pure Function
*/

const add10 = function(num){
    return num + 10
}
  
console.log(add10(10)) // 20
console.log(add10(10)) // 20
console.log(add10(20)) // 30
console.log(add10(20)) // 30

// **********************************************************

/*
    Pure Function with array methods
*/

// slice cuts the array indicating the 1st and 2nd index
var arr = [1,2,3,4,5]

console.log(arr.slice(1,4)) // [2, 3, 4]
console.log(arr.slice(1,4)) // [2, 3, 4]
console.log(arr.slice(0,1)) // [1]
console.log(arr.slice(0,1)) // [1]

/*
    Impure Function with array methods
*/

// push adds a new element in the array 
var arr = [1,2,3,4,5]

arr.push(6)
console.log(arr) // [1,2,3,4,5,6]
arr.push(6)
console.log(arr) // [1,2,3,4,5,6,6]
arr.push(6)
console.log(arr) // [1,2,3,4,5,6,6,6]

// For execution context reasons arr.push(6) can not go inside of a console.log
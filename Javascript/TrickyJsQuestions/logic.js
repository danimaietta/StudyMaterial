//js modules utilice: use strict by default

// More hoisting
const hoist = (track) => {
    if(track === "Down"){
      action = "dance"
    }else{
      action = "skip"
    }
    var action
    return action
}
  
console.log(hoist("Down"))
console.log(hoist("Up"))

// ---------------------------------------------------------------------------------------------------------------------------------

/* 
  undeclared, undefined, null
  tip: const is never undefined
*/

// undefined
let foo // undeclared
let bar = {}
let baz = ['one','two','three']
const qux = function(){}

console.log(foo, bar.name, baz[3], qux())

// ---------------------------------------------------------------------------------------------------------------------------------

/* check for undefined */

let foo2
let bar2 = {}
let baz2 = ['one','two','three']
const qux2 = function(){}

console.log(foo2, bar2.name, baz2[3], qux2())

// ---------------------------------------------------------------------------------------------------------------------------------

/* check for undefined */
let foo3

console.log(typeof foo3) // "undefined" as a string
console.log(typeof bar3) // undeclared, but also returns undefined

//preferred
console.log(foo3 === undefined) // true boolean

const baz3 = 'undefined'
console.log(baz3 === undefined)

const obj1 = null
console.log(typeof obj1)
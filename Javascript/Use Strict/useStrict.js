"use strict"

/*
    The next examples will give error with 'use strict'
    Without 'use strict' they should work
*/


// not using var, const, let
/*
i = 0
console.log(i)
*/


// delete variable
/*
var x = 1
delete x
*/


// duplicate a parameter
/*
function x(p1, p1, p1) {
    console.log(p1)
}

x(1, 2, 3)
*/

// octal numeric literals 
/*
var x = 010
*/


// read-only property
/*
var obj = {};
Object.defineProperty(obj, "x", {value:0, writable:false});
obj.x = 3.14;
*/


// global this is undefined
/*
function printThis(){
    console.log(this)
}
printThis()
*/


// reserved words
/*
var implements = 1
var interface = 2
var let = 3
var package = 4
var private = 5
var protected = 6
var public = 7
var static = 8
var yield = 9
var eval = 10
var arguments = 11
*/





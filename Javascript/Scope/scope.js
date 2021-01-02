/* *********************
    EXECUTION CONTEXT
    1.Creation Phase   -   2.Execution Phase
********************* */



// Example 1   

var text = "Text"         // 1. text is undefined        -   2. text is equal to "Text"

function print(){        // 1. it creates the function   -   2. nothing     
  console.log("mensaje")
}

print()                  // 1. nothing                 -   2. it executes print()





// Example 2

var a           // 1. a is undefined      -   2. nothing
console.log(a)  // 1. nothing             -   2. it executes console.log(a)
a = 'a'         // 1. nothing             -   2. a = 'a'





// Example 3

a()                         // 1. nothing                   -   2. it executes a()
//b()                       // 1. nothing                   -   2. it executes b()

function a(){               // 1. it creates the function   -   2. nothing
  console.log('hoisting method a')
}

var b = function(){         // 1. b is undefined            -   2. b is equal to function(){ console.log('hoisting method b') }
  console.log('hoisting method b')
}

b()                         // 1. nothing                   -   2. it executes b()




/* *********************
         SCOPE
********************* */


// Example 1 - Function Scope

function example(){
    var text = "Hello World"
    console.log("The variable text is: " + text) // The variable text is: Hello World
}

example()

console.log("The variable text is: " + text) // Uncaught ReferenceError: text is not defined



// Example 2 - Block Scope

if(true){
    var a = 'a'
    let b = 'b'
}

console.log(a) // a
console.log(b) // Uncaught ReferenceError: b is not defined


// Example 3 - var vs let

// using var

var names = ['Heisenberg', 'Saul', 'Mike', 'Tuco']

function iterate(arr){
  for(var i=0; i < arr.length; i++){
    console.log(names[i]) // Heisenberg Saul Mike Tuco
  }
  // Lets supose here is more code
  console.log(i) // 4
}

iterate(names)

// using let

var names = ['Heisenberg', 'Saul', 'Mike', 'Tuco']

function iterate(arr){
  for(let i=0; i < arr.length; i++){
    console.log(names[i]) // Heisenberg Saul Mike Tuco
  }
  // Lets supose here is more code
  console.log(i) // Uncaught ReferenceError: i is not defined
}

iterate(names)

// using const

const pi = 3.14
console.log(pi) // 3.14

pi = 10 // Uncaught TypeError: Assignment to constant variable

// Good practice using const

const goodPractice = function(){
  console.log('This is a good practice')
}
  
goodPractice()




console.log("Andre" || "Charlie") // Andre
console.log("Andre" && "Charlie") // Charlie



/*
  mixed values 
*/

console.log(4 || 2 > 3) // true
console.log(1 || 2 > 3) // false

console.log(5 && 2 > 1) // true
console.log(2 && 3 > 4) // false


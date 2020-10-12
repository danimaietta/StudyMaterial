/*
  Mergin number and string operators
*/

console.log(2 + '2') // 22
console.log(2 - '2') // 0

// ---------------------------------------------------------------------------------------------------------------------------------

/* 
  var vs let
*/

let func = function(){
    {
      let l = 'let'
      var v = 'var'
    }
    //console.log(l)
    //console.log(v)
}
  
func()

// ---------------------------------------------------------------------------------------------------------------------------------

/*
  TRUE = 1
  
  5 < 6 = true
  true < 7 = true

  7 > 6 = true
  true > 5 = false

*/

console.log(5 < 6 < 7) // true
console.log(7 > 6 > 5) // false

// ---------------------------------------------------------------------------------------------------------------------------------

/*
  What will this return?
*/
let x = function(){
    return
      {
        message: 'hi'
      }
}
//console.log(x())

// ---------------------------------------------------------------------------------------------------------------------------------

/*
  How would you stop an object
  from adding more properties?
*/

let profile = {
    name: 'daniel'
}

//Object.freeze(profile) // no more properties can be added and the ones already existing CANT be modified
//Object.seal(profile) // no more properties can be added and the ones already existing CAN be modified

//Another way to do it
/*
    Object.defineProperty(profile, 'age', {
        value: 24,
        writable: false
    })
*/

profile.name = 'jose'
profile.age = 25

console.log(profile)

// ---------------------------------------------------------------------------------------------------------------------------------

/*
  This is because Math.max() will pick the lowest
  possible value to start comparing
*/

console.log(Math.max()) //-Infinity

// ---------------------------------------------------------------------------------------------------------------------------------

/*
  What will g will print ?
*/

let f = [1,2,3,4]
let g = f
// let g = [...f]

f.push(5)

console.log(f)
//console.log(g) // this is because it copies the reference

// ---------------------------------------------------------------------------------------------------------------------------------

/*
  What will this print?
*/

let j = [1,2,3]
let k = [4,5,6]

console.log( [...j,...k] )


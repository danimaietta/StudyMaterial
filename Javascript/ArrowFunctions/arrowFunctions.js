/*
    Both methods do the same
*/

// without arrow function
const salute = function (name) {
  return 'Hi ' + name
}

// with arrow function
const salute = name => {
  return 'Hi ' + name
}

// one line functions, 'return' works implicitly
const salute = name => 'Hi ' + name

// when it only has one argument you can take out the ()
const salute = name => 'Hi ' + name

/* Had to comment this 2 examples because of the auto-indentation */

// auto return
/*

  const salute = name => (
    'Hi ' + name // this is auto returned
  )

*/

// auto return sugar
/*

  const salute = name =>
    'Hi ' + name // this is auto returned

*/

/*
    Under each method use
*/
console.log(salute('Fernanda'))

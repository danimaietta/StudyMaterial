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

// one line functions
const salute = name => 'Hi ' + name

// when it only has one argument you can take out the ()
const salute = name => 'Hi ' + name

/*
    Under each method use
*/
console.log(salute('Fernanda'))

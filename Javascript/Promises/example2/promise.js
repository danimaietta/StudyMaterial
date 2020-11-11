const actionOne = new Promise(resolve => {
    setTimeout(() => resolve('Action One Done'), 5000)
})

const actionTwo = new Promise(resolve => {
    setTimeout(() => resolve('Action Two Done'), 2000)
})

const actionThree = new Promise(resolve => {
    setTimeout(() => resolve('Action Three Done'), 2000)
})


// Cada acción se ejecuta cuando termine el tiempo
actionOne.then(msg => console.log(msg))
actionTwo.then(msg => console.log(msg))
actionThree.then(msg => console.log(msg))

// Una vez todas terminan devuelve un array con los datos retornados por resolve
// Promise.race ejecuta .then de la primera promesa que termine
Promise.all([
    actionOne,
    actionTwo,
    actionThree
]).then(messages => console.log(messages)) // ["Action One Done", "Action Two Done", "Action Three Done"]
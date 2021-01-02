const actionOne = new Promise(resolve => {
    setTimeout(() => resolve('Action One Done'), 5000)
})

const actionTwo = new Promise(resolve => {
    setTimeout(() => resolve('Action Two Done'), 2000)
})

const actionThree = new Promise(resolve => {
    setTimeout(() => resolve('Action Three Done'), 2000)
})


// Each action executes when the time ends
actionOne.then(msg => console.log(msg))
actionTwo.then(msg => console.log(msg))
actionThree.then(msg => console.log(msg))

// Once every method is finished it returns an array with the data returned by resolve
// Promise.race execute .then of the 1st promise that ends
Promise.all([
    actionOne,
    actionTwo,
    actionThree
]).then(messages => console.log(messages)) // ["Action One Done", "Action Two Done", "Action Three Done"]
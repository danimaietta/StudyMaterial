// creating a promise
const promise = new Promise((resolve, reject) => {
    if(1 == 1){
        resolve('Success')
    }else{
        reject('Failed')
    }
})

// calling the promise
p.then(message => {
    console.log(`The promise is a total ${message}`)
}).catch(message => {
    console.log(`The promise ${message}`)
})
let promise = new Promise((resolve, reject) => {
    let a = 1 + 1
    if(a == 2){
        resolve('Success')
    }else{
        reject('Failed')
    }
})

p.then(message => {
    console.log(`The promise is a total ${message}`)
}).catch(message => {
    console.log(`The promise ${message}`)
})
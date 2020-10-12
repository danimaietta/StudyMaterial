// 1st example

const cleanRoom = function() {
    return new Promise((resolve, reject) => {
      resolve('Cleaned The Room. ')
    })
  }
  
  const removeGarbage = function(message) {
    return new Promise((resolve, reject) => {
      resolve(message + 'Remove Garbage. ')
    })
  }
  
  const winIcecream = function(message) {
    return new Promise((resolve, reject) => {
      resolve(message + 'Cleaned The Room. ')
    })
  }
  
  cleanRoom().then((result) => {
    return removeGarbage(result)
  }).then((result) => {
    return winIcecream(result)
  }).then((result) => {
    console.log('finished ' + result)
  })



  // 2nd

  // Executes then when all other promises are resolved
  Promise.all([cleanRoom(), removeGarbage(), winIcecream()]).then(() => console.log('finished '))

  // Executes then when the 1st promise is resolved
  Promise.race([cleanRoom(), removeGarbage(), winIcecream()]).then(() => console.log('finished '))



  // 3rth

  Promise.all([cleanRoom().then((m) => {
    console.log(m)
    return removeGarbage("Then ")
  }).then((m) => {
    console.log(m)
    return winIcecream("Yeii ")
  }).then((m) => {
     console.log(m)
  })]).then(() => console.log('finished'))
// Async Await

function makeRequest(location){
  return new Promise((resolve, reject) => {
      if(location === 'Google'){
          resolve('Google says hi')
      }else{
          reject('We can only talk to Google')
      }
  })
}

function processRequest(response){
  return new Promise(resolve => {
      resolve(`Extra Information ${response}`)
  })
}

// vs

// Promises

/*
makeRequest('Google').then(res => {
  return processRequest(res)
}).then(processedResponse => {
  console.log(processedResponse)
}).catch(err => console.log(err)) 
*/


// Async Await solution

const doWork = async () => {
  try{
    const res = await makeRequest('Google')
    const processedResponse = await processRequest(res)
    console.log(processedResponse)
  }catch(err){
    console.log(err)
  } 
}
doWork()

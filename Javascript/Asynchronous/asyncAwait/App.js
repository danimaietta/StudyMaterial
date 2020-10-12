function makeRequest(location){
    return new Promise((resolve, reject) => {
        console.log(`Making Request to ${location}`)
        if(location === 'Google'){
            resolve('Google says hi')
        }else{
            reject('We can only talk to Google')
        }
    })
}

function processRequest(response){
    return new Promise((resolve, reject) => {
        console.log('Processing response')
        resolve(`Extra Information ${response}`)
    })
}

// Promises solution
/*
makeRequest('Google').then(res => {
  console.log(res)
  return processRequest(res)
}).then(processedResponse => {
  console.log(processedResponse)
}).catch(err => console.log(err)) 
*/


// Async Await solution
/*
const doWork = async () => {
  try{
    const res = await makeRequest('Google')
    console.log(res)
    const processedResponse = await processRequest(res)
    console.log(processedResponse)
  }catch(err){
    console.log(err)
  } 
}
doWork()
*/
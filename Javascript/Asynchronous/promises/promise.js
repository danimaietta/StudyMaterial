let userLeft = false
const userWatchingCatMeme = false

const watchTutorialPromise = new Promise((resolve, reject) => {
    // call the server data
    if(userLeft){
        reject({
            name: 'User Left',
            message: ':('
        })
    }else if(userWatchingCatMeme){
        reject({
            name: 'User Watching Cat Meme',
            message: 'WebDevSimplified < Cat'
        })
    }else{
        resolve('Thumbs up and Subscribe')
    }
})

watchTutorialPromise.then(message => {
    console.log(`Success: ${message}`)
}).catch(error => {
    console.log(`${error.name} ${error.message}`)
})
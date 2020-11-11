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
    // show the data nice and clean in the UI
    console.log(`Success: ${message}`)
}).catch(error => {
    // show an error message so the user knows
    console.log(`${error.name} ${error.message}`)
})
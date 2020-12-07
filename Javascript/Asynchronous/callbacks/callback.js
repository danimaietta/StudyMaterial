const userLeft = true
const userWatchingCatMeme = false

const watchTutorialCallback = (callback, errorCallback) => {
    // call the server data
    if(userLeft){
        errorCallback({
            name: 'User Left',
            message: ':('
        })
    } else if(userWatchingCatMeme){
        errorCallback({
            name: 'User Watching Cat Meme',
            message: 'WebDevSimplified < Cat'
        })
    } else {
        callback('Thumbs up and Subscribe')
    }
}

watchTutorialCallback(message => {
    console.log(`Success: ${message}`)
}, error => {
    console.log(`${error.name} ${error.message}`)
})
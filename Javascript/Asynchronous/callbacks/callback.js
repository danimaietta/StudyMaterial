const userLeft = false
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
    // show the data nice and clean in the UI
    console.log(`Success: ${message}`)
}, error => {
    // show an error message so the user knows
    console.log(`${error.name} ${error.message}`)
})
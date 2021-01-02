/*
    Have present that each file has a specific purpose
    Here it just handles information, nothing of interace
*/

const addMovie = (title, description) => {
    try{
        firebase.database().ref(`movies/${title}`).set({
            title,
            description
        })
    }catch(error){
        console.log(error)
    }
}

const findMovie = title => {
    return new Promise(resolve => {
        firebase.database().ref(`movies/${title}`).on('value', snapshot => {
            try{
                resolve(snapshot.val())
            }catch(error){
                console.log(`findMovie: ${error}`)
            }
        })   
    }) 
}

const updateMovie = (titleToChange, title, description) => {
    return new Promise(resolve => {
        try{
            firebase.database().ref(`movies/${titleToChange}`).update({
                title,
                description
            })
            resolve(true)
        }catch(error){
            console.log(`updateMovie: ${error}`)
            resolve(false)
        }
    })
}

const deleteMovie = title => {
    return new Promise(resolve => {
        try{
            firebase.database().ref(`movies/${title}`).remove()
            resolve(true)
        }catch(error){
            console.log(`deleteMovie: ${error}`)
            resolve(false)
        }
    })
}

const crud = {
    addMovie,
    findMovie,
    updateMovie,
    deleteMovie
}

export default crud
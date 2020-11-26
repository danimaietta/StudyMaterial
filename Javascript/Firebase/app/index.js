import crud from './DB/firebase'
import './style.css' // we use css from here
import msgHandler from './logic/msgHandler'

// Create
const addBtn = document.getElementById("addMovieBtn")

addBtn.addEventListener("click", async () => {
    const title = document.getElementById("titleInp").value
    const description = document.getElementById("descriptionInp").value
    try{
        const movie = await crud.findMovie(title)
        if(movie === null){
            msgHandler.showErrorMsg(false)
            crud.addMovie(title, description)
            msgHandler.showSuccessMsg(true, 'create')
        }else{
            msgHandler.showErrorMsg(true, 'create')
            msgHandler.showSuccessMsg(false)
        }
    }catch(error){
        console.log(error)
        msgHandler.showErrorMsg(true, 'error')
    }

})

// Read
const getBtn = document.getElementById("getMoviesBtn")

getBtn.addEventListener("click", async () => {
    const title = document.getElementById("findByTitleInp").value
    try{
        const movie = await crud.findMovie(title)
        if(movie !== null && movie.title !== undefined){
            msgHandler.showErrorMsg(false)
            document.getElementById('title').innerText = movie.title 
            document.getElementById('description').innerText = movie.description
        }else{
            msgHandler.showErrorMsg(true, 'read')
        }
    }catch(error){
        console.log(error)
        msgHandler.showErrorMsg(true, 'error')
    } 
})

// Update
const updateBtn = document.getElementById("updateMoviesBtn")

updateBtn.addEventListener("click", async () => {
    const readInp = document.getElementById("findByTitleInp").value
    const newTitle = document.getElementById("newTitleInp").value
    const newDescription = document.getElementById("newDescriptionInp").value
    try{
        if(readInp !== ''){
            const updated = await crud.updateMovie(readInp, newTitle, newDescription)
            if(updated){
                msgHandler.showErrorMsg(false)
                msgHandler.showSuccessMsg(true, 'update')
            }else{
                msgHandler.showSuccessMsg(false)
                msgHandler.showErrorMsg(true, 'update')
            }
        }else{
            msgHandler.showSuccessMsg(false)
            msgHandler.showErrorMsg(true, 'update')
        }
    }catch(error){
        console.log(error)
        msgHandler.showErrorMsg(true, 'error')
    } 
})

// Remove

const deleteBtn = document.getElementById("deleteMoviesBtn")

deleteBtn.addEventListener("click", async () => {
    const readInp = document.getElementById("findByTitleInp").value
    try{
        if(readInp !== ''){
            const deleted = await crud.deleteMovie(readInp)
            if(deleted){
                msgHandler.showErrorMsg(false)
                msgHandler.showSuccessMsg(true, 'delete')
            }else{
                msgHandler.showSuccessMsg(false)
                msgHandler.showErrorMsg(true, 'delete')
            }
        }else{
            msgHandler.showSuccessMsg(false)
            msgHandler.showErrorMsg(true, 'delete')
        }
    }catch(error){
        console.log(error)
        msgHandler.showErrorMsg(true, 'error')
    } 
})


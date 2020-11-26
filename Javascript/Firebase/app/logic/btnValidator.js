const addTitleInp = document.getElementById("titleInp") 
const addDescriptionInp = document.getElementById("descriptionInp")

addTitleInp.addEventListener("keyup", () => {
    if(addTitleInp.value.length === 0){
        document.getElementById("addMovieBtn").disabled = true 
    }else{
        document.getElementById("addMovieBtn").disabled = false 
    }
})

const readInp = document.getElementById("findByTitleInp")

readInp.addEventListener("keyup", () => {
    if(readInp.value.length === 0){
        document.getElementById("getMoviesBtn").disabled = true 
    }else{
        document.getElementById("getMoviesBtn").disabled = false 
    }
})

const updateTitleInp = document.getElementById("newTitleInp")

updateTitleInp.addEventListener("keyup", () => {
    if(updateTitleInp.value.length === 0){
        document.getElementById("updateMoviesBtn").disabled = true 
    }else{
        document.getElementById("updateMoviesBtn").disabled = false 
    }
})
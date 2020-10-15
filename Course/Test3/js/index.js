/*
    onclick call this function
    if checkUserAndPassword is true it redirects to home.html
*/
function validateInputs(){
    const username = document.getElementById("usernameId").value
    const password = document.getElementById("passwordId").value
    if(checkUserAndPassword(username, password)) window.location.href = 'html/home.html'
}

/*
    displays error message
    if show argument is true then show content
*/
const userUnregistredMsg = (show) => {
    let errorMsg = document.getElementsByClassName('errorMsg')[0]
    errorMsg.innerText = show ? 'The user is not registred' : ''
}

/*
    displays error message
    if show argument is true then show content
*/
const passwordUnregistredMsg = (show) => {
    let errorMsg = document.getElementsByClassName('errorMsg')[1]
    errorMsg.innerText = show ? 'The password is wrong' : ''
}

/*
    validateInputs calls me
    if user and password matches it returns true
*/
function checkUserAndPassword(username, password){
    if(!isUserRegistred(username)){
        userUnregistredMsg(true)
        return false
    }if(!isPasswordRegistred(password)){
        userUnregistredMsg(false)
        passwordUnregistredMsg(true)
        return false
    }else{
        return true
    }
}

/*
    usuarios
*/
const users = [
    {
        username: "dmaietta",
        password: "omelette321"
    },
    {
        username: "vegueta",
        password: "kakaroto8000"
    },
    {
        username: "admin",
        password: "admin"
    }
]

/*
    Verifica que un usuario este registrado comparando el nombre de usuario
*/
function isUserRegistred(username){
    for(let user of users){
        if(user.username === username){
            return true
        }
    }
}

/*
    Verifica que la contraseña coincida
*/
function isPasswordRegistred(password){
    for(let user of users){
        if(password === user.password){
            return true
        }
    }
}
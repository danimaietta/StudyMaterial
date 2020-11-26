const showSuccessMsg = (show, type = '') => {
    if(show && type === "create"){
        document.getElementById('succMsgCreate').innerText = 'The movie was created successfully'
    }else if(show && type === "update"){
        document.getElementById('succMsgUpdate').innerText = 'The movie was updated successfully'
    }else if(show && type === "delete"){
        document.getElementById('succMsgDelete').innerText = 'The movie was deleted successfully'
    }else{
        document.getElementById('succMsgCreate').innerText = ''
        document.getElementById('succMsgUpdate').innerText = ''
        document.getElementById('succMsgDelete').innerText = ''
    }
}

const showErrorMsg = (show, type = '') => {
    if(show && type === "create"){
        document.getElementById('errMsgCreate').innerText = 'The movie already exist'
        document.getElementById('title').innerText = ''
        document.getElementById('description').innerText = ''
    }else if(show && type === "read"){
        document.getElementById('errMsgRead').innerText = 'Movie not found'
        document.getElementById('title').innerText = ''
        document.getElementById('description').innerText = ''
    }else if(show && type === "update"){
        document.getElementById('errMsgUpdate').innerText = 'The movie to update is not found'
        document.getElementById('title').innerText = ''
        document.getElementById('description').innerText = ''
    }else if(show && type === "delete"){
        document.getElementById('errMsgDelete').innerText = 'The movie to delete is not found'
        document.getElementById('title').innerText = ''
        document.getElementById('description').innerText = ''
    }else if(show && type === "error"){  
        document.getElementById('errMsg').innerText = 'Some error happened, please try later'
    }else{
        document.getElementById('errMsgCreate').innerText = ''
        document.getElementById('errMsgRead').innerText = ''
        document.getElementById('errMsgUpdate').innerText = ''
        document.getElementById('errMsgDelete').innerText = ''
    }
}

const msgHandler = {
    showSuccessMsg,
    showErrorMsg
}

export default msgHandler
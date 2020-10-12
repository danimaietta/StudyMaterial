/* ********************
    INTERACCION DOM
******************** */


// Esta función es llamada desde el botón
function cambiaTexto(){
    var p1Text = document.getElementById("p1").innerText // obtiene el texto actual del p1
  
    if(p1Text === "Primer Mensaje"){
      document.getElementById("p1").innerText = "Segundo Mensaje" // guarda el texto en el elemento p1
    }else{
      document.getElementById("p1").innerText = "Primer Mensaje" // guarda el texto en el elemento p1
    }
}
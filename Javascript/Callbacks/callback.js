/* ********************
        CALLBACK
******************** */

// callback con setTimeout
var callback = function() {
    console.log("Done!")
}

setTimeout(callback, 5000);

// callback con metodos normales
function saludar(nombre) {
    alert('Hola ' + nombre)
}
  
function despedir(nombre){
    alert('Adios ' + nombre)
}
  
function procesarEntradaUsuario(callback) {
    var nombre = prompt('Por favor ingresa tu nombre.')
    callback(nombre);
}
  
procesarEntradaUsuario(despedir);

// Asynchronous vs Synchronous 

var sincrono = () => console.log("Do something") 
sincrono()
setTimeout(() => console.log("Done!"), 5000)
sincrono()

// Callback hell

setTimeout(function() {
    console.log("Done!")
      setTimeout(function() {
        console.log("Done!")
        setTimeout(function() {
          console.log("Done!")
        }, 5000);
    }, 5000);
}, 5000);




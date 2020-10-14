/*
    Ambos metodos hacen lo mismo
*/

// sin arrow function
const saludar = function(nombre){
    return "Salu2 " + nombre
}

// con arrow function
const saludar = (nombre) => {
    return "Salu2 " + nombre
}

// Funciones de una sola linea
const saludar = (nombre) => "Salu2 " + nombre


// cuando solo se envia un solo parametro se pueden quitar los ()
const saludar = nombre => "Salu2 " + nombre


/*
    Debajo de cada metodo colocar:
*/
console.log(saludar("Fernanda"))

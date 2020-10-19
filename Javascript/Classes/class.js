/* *********************************************************************************************
  
class es una palabra reservada

class es para clasificar objetos, un class es un objeto
  
las clases se utilizan cuando queremos crear multiples objetos con las mismas propiedades

********************************************************************************************* */

class Car {
    constructor(name, year) {
      this.name = name; // con this nos aseguramos que las variables sean propias de la clase
      this.year = year; // y que no se confunda con los parametros
    }
}

let myCar1 = new Car("Ford", 2014); // new llama al constructor, new y constructor tambien son palabras reservadas
let myCar2 = new Car("Audi", 2019); // Car es el tipo de objeto que se va a crear

console.log(myCar1.name) // Ford
console.log(myCar2.year) // 2019


/* ********************************************
    misma clase pero utilizando metodos
******************************************** */

// dentro de una clase no es necesario especificar function, con solo los () ya sabe

class Car {
    constructor(name, year) {
      this.name = name;
      this.year = year;
    }
    age(actualYear) {
      return actualYear - this.year;
    }
}
  
let myCar = new Car("Ford", 2014);
let year = new Date().getFullYear()
console.log(`my car is ${myCar.age(year)} years old`) // my car is 6 years old


/* ********************************************
                MINDBLOWN
        Los tipos de variables son classes
******************************************** */

var text = String('hi')
console.log(text) // hi

var arr = new Array(1,2,3,4,5)
console.log(arr) // [1, 2, 3, 4, 5]

var obj = new Object()
obj.property = 'valueOfProperty'
console.log(obj.property) // valueOfProperty
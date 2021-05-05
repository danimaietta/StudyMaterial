/* *********************************************************************************************
  
class is a reserved word

class is to clasify objects, a class is an object
  
classes are used when we want to create multiple objects with the same properties

********************************************************************************************* */

class Car {
  constructor(name, year) {
    this.name = name // with 'this' we asure that the variables are from the class
    this.year = year // and to not be confused which are parameters
  }
}

let myCar1 = new Car('Ford', 2014) // 'new' calls the constructor, new and the constructor also are reserved words
let myCar2 = new Car('Audi', 2019) // Car is the type of the object

console.log(myCar1.name) // Ford
console.log(myCar2.year) // 2019

/* ********************************************
    same class but adding methods
******************************************** */

// a function inside of a class there is not need to write 'function', with just () it knows

class Car {
  constructor(name, year) {
    this.name = name
    this.year = year
  }
  age(actualYear) {
    return actualYear - this.year
  }
}

let myCar = new Car('Ford', 2014)
let year = new Date().getFullYear()
console.log(`my car is ${myCar.age(year)} years old`) // my car is 6 years old

/* ********************************************
                MINDBLOWN
    The types of variables are classes
******************************************** */

var text = String('hi')
console.log(text) // hi

var arr = new Array(1, 2, 3, 4, 5)
console.log(arr) // [1, 2, 3, 4, 5]

var obj = new Object()
obj.property = 'valueOfProperty'
console.log(obj.property) // valueOfProperty

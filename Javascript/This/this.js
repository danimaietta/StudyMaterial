/* *******************************
  this apunta siempre al window
******************************* */

console.log(this) // object window

/* *******************************
  this y window son implicitos
******************************* */

this.window.document.getElementById("id")
document.getElementById("id")

/* *******************************
  la verdadera utilidad de this
******************************* */

var person = {
    firstName: "Daniel",
    lastName : "Maietta",
    fullName : function() {
      return this.firstName + " " + this.lastName;
    }
};

console.log(person.fullName()) // Daniel Maietta

/* *******************************
  mala practica
******************************* */

var person = {
  firstName: "Daniel",
  lastName : "Maietta",
  fullName : function() {
    return person.firstName + " " + person.lastName;
  }
};

console.log(person.fullName()) // Daniel Maietta

/* ********************************************
  arrow function hace que this apunte a window
******************************************** */

var person = {
  firstName: "Daniel",
  lastName : "Maietta",
  fullName : () => this.firstName + " " + this.lastName
};

console.log(person.fullName()) // Daniel Maietta

/* *******************************
  METODOS RELACIONADOS A THIS
******************************* */

/* *******************************
  call
    el this de fullName() apuntara person1 
******************************* */

var person = {
  fullName: function() {
    return this.firstName + " " + this.lastName
  }
}
var person1 = {
  firstName:"John",
  lastName: "Doe"
}
var person2 = {
  firstName:"Mary",
  lastName: "Doe"
}
var x = person.fullName.call(person1)

console.log(x) // John Doe

// call con parametros

var person = {
  fullName: function(city, country) {
    return `${this.firstName} ${this.lastName} ${city} ${country}`
  }
}
var person1 = {
  firstName:"John",
  lastName: "Doe"
}
var person2 = {
  firstName:"Mary",
  lastName: "Doe"
}
var x = person.fullName.call(person1, "Oslo", "Norway")

console.log(x) // John Doe Oslo Norway

/* *******************************
  apply
    igual que call pero el segundo parametro es un array [] 
******************************* */

var person = {
  fullName: function(city, country) {
    return `${this.firstName} ${this.lastName} ${city} ${country}`
  }
}
var person1 = {
  firstName:"John",
  lastName: "Doe"
}
var person2 = {
  firstName:"Mary",
  lastName: "Doe"
}
var x = person.fullName.apply(person1, ['Oslo', 'Norway']); 
console.log(x) // John Doe Oslo Norway

/* *********************************************************************************************
  bind
    vincula this a una funcion externa (fullName2) de un objeto con un metodo que use this (fullName)

    si quisiera tener la funcion de un objeto que usa this debemos usar bind
********************************************************************************************* */

var person = {
  firstName:"John",
  lastName: "Doe",
  fullName: function() {
    return `${this.firstName} ${this.lastName}`
  }
}

var fullName2 = person.fullName.bind(person); 
console.log(fullName2()) // John Doe
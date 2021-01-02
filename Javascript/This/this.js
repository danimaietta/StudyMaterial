/* *******************************
  'this' always points to the nearest object
  'this' outside of an object points to the window object
******************************* */

console.log('console.log(this):', this) // window object

/* *******************************
  this y window are implicit
******************************* */

this.window.document.getElementById("id")
document.getElementById("id")

/* *******************************
  the truth useful of this
******************************* */

var person = {
    firstName: "Daniel",
    lastName : "Maietta",
    fullName : function() {
      return this.firstName + " " + this.lastName;
    }
};

console.log('good practice:', person.fullName()) // Daniel Maietta

/* *******************************
  bad practice
******************************* */

var person = {
  firstName: "Daniel",
  lastName : "Maietta",
  fullName : function() {
    return person.firstName + " " + person.lastName;
  }
};

console.log('bad practice:', person.fullName()) // Daniel Maietta

/* ********************************************
  arrow function makes 'this' to point to the window
******************************************** */

var person = {
  firstName: "Daniel",
  lastName : "Maietta",
  fullName : () => this.firstName + " " + this.lastName
};

console.log('with arrow function:', person.fullName()) // undefined undefined

/* *******************************
  METHODS RELATED TO THIS
******************************* */

/* *******************************
  call
    the this in fullName() will point to person1 
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

console.log('call:', x) // John Doe

// call with parameters

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

console.log('call with parameters:', x) // John Doe Oslo Norway

/* *******************************
  apply
    same that call but the second parameter is an array [] 
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
console.log('apply:', x) // John Doe Oslo Norway

/* *********************************************************************************************
  bind
    binds this to an external function (fullName2) of an object with a method that use this (fullName)

    if we want to have the function of an object that use this we must use bind
********************************************************************************************* */

var person = {
  firstName:"John",
  lastName: "Doe",
  fullName: function() {
    return `${this.firstName} ${this.lastName}`
  }
}

var fullName2 = person.fullName.bind(person); 
console.log('bind:', fullName2()) // John Doe
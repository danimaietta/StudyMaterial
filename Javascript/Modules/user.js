/*
    ES6 version
*/

export default class User {
  constructor(name, age) {
    this.name = name
    this.age = age
  }
  sayHi() {
    console.log(`hi ${this.name}, my age is ${this.age}`)
  }
}

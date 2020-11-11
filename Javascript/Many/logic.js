/******** Hoisting ********/

a()
//b()
function a(){
  console.log('hoisting method a')
}

var b = function(){
  console.log('hoisting method b')
}

b()


/******** Destructuring ********/

let cat = {name:"Mussolini", hairColor: "grey-white", eyesColor: "yellow", weight: 6}

let {name:catName, hairColor, eyesColor, weight} = cat;

console.log(`cat.name: ${cat.name}`) // Mussolini
console.log(`catName: ${catName}`)   // Mussolini

function fetchRepos({ language='All', minStars=0, maxStars='', createdBefore='no', createdAfter='yes' }){
  console.log(`language: ${language}, minStars: ${minStars}, maxStarts: ${maxStars}, createdBefore: ${createdBefore}, createdAfter: ${createdAfter}`)
}

fetchRepos({
  language: 'Spanish',
  minStars: 1,
  maxStars: 4
})


/******** Callback ********/

let sum = (a, b) => a + b
let addFive = (num) => sum(num, 5)
console.log(addFive(6))


/******** Promise ********/
// 1- How a promise is make?
// 2- How to change the status of a promise?
// 3- How do you listen for when the status of a promise changes

function onSuccess () {
  console.log('Success!')
}

function onError () {
  console.log('💩')
}

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    onSuccess()
  }, 2000)
})

promise.then(onSuccess)
promise.catch(onError)

// Async Await
async function add (x, y) {
  return x + y
}

add(2,3).then((result) => { // 
  console.log(result) // 5
})

// Funcional Constructor with shared methods

const animalMethods = {
  eat(amount) {
    console.log(`${this.name} is eating.`)
    this.energy += amount
  },
  sleep(length) {
    console.log(`${this.name} is sleeping.`)
    this.energy += length
  },
  play(length) {
    console.log(`${this.name} is playing.`)
    this.energy -= length
  }
}

function Animal (name, energy) {
  let animal = {}
  animal.name = name
  animal.energy = energy
  animal.eat = animalMethods.eat
  animal.sleep = animalMethods.sleep
  animal.play = animalMethods.play

  return animal
}

const leo = Animal('Leo', 7)
const snoop = Animal('Snoop', 10)


leo.eat.arguments
leo.eat(2)

// Object.create()

const moves = {
  melee() {
    console.log(`${this.name} is making a melee attack.`)
  },
  range() {
    console.log(`${this.name} is making a range attack.`)
  },
  parry() {
    console.log(`${this.name} is parrying an attack.`)
  }
}

function Champion (name, mana) {
  let champion = Object.create(moves)
  champion.name = name
  champion.mana = mana

  return champion
}

const leona = Champion('Leona', 7)
const ziggs = Champion('Ziggs', 10)

leona.melee()
ziggs.range()

// Prototype

function doThing () {}
console.log(doThing.prototype) // {}

// Prototypal Instantiation

function Person (name, age) {
  let person = Object.create(Person.prototype)
  person.name = name
  person.age = age

  return person
}

Person.prototype.eat = function () {
  console.log(`${this.name} is eating.`)
}

Person.prototype.sleep = function () {
  console.log(`${this.name} is sleeping.`)
}

Person.prototype.study = function () {
  console.log(`${this.name} is studying.`)
}

const daniel = Person('Daniel', 24)
daniel.study()

console.log(Person.prototype)

// With classes

class Cat {
  constructor(name, energy) {
    this.name = name
    this.energy = energy
  }
  eat() {
    console.log(`${this.name} is eating.`)
  }
  sleep() {
    console.log(`${this.name} is sleeping.`)
  }
  play() {
    console.log(`${this.name} is playing.`)
  }
}

const mussolini = new Cat('Mussolini', 7)
mussolini.eat()


// Sugar
const friendsWithSugar = []
const friendsWithoutSugar = new Array()


// Prototype in Array
// in the console write: Array.prototype
console.log(Array.prototype)


// Prototype in Array
// in the console write: Object.prototype
// the good way of look for the prototype: object.getPrototypeOf(instance)


// Inside of object.create
Object.create = function (objToDelegateTo) {
  function Fn(){}
  Fn.prototype = objToDelegateTo
  return new Fn()
}


// Arrow Functions can't be constructor functions
const AnimalObj = () => {}
const bird = new AnimalObj() // Error: Animal is not a constructor


// Private and Public Class Fields
/* this
class Animal {
  eat() {}
  sleep = () => {}
}*/

/* is the same than this
function Animal () {
  this.sleep = function () {}
}
Animal.prototype.eat = function () {}*/


class Duck {
  quack = () => console.log(String.fromCodePoint('0x1F986').repeat(3))
}

class Dog {
  quack = () => console.log(String.fromCodePoint('0x1f415').repeat(3))
}

let quack = possibleDuckImposter => possibleDuckImposter.quack()

let duck = new Duck()
let dog = new Dog()
;[duck, dog].forEach(obj => quack(obj))

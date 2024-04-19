class Animal {
    constructor(name) {
      this.name = name;
    }
  
    // Polymorphic method
    makeSound() {
      return "Animal makes a sound";
    }
}
  
class Dog extends Animal {

    makeSound() {
        return "Woof!";
    }
}

class Cat extends Animal {

    makeSound() {
        return "Meow!";
    }
}

const animal = new Animal("Generic Animal");
const dog = new Dog("Buddy");
const cat = new Cat("Whiskers");

console.log(animal.makeSound()); // Animal makes a sound
console.log(dog.makeSound());    // Woof!
console.log(cat.makeSound());    // Output: Meow!
class Couple {
    person1
    person2

    constructor(person1, person2) {
        this.person1 = person1
        this.person2 = person2
    }

    getNames() {
        return `${this.person1.name} and ${this.person2.name}`
    }
}

class Person {
    name
    age
}


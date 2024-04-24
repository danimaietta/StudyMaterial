// Subject class
class Subject {
    constructor() {
        this.observers = [];
    }

    attach(observer) {
        this.observers.push(observer);
    }

    detach(observer) {
        this.observers = this.observers.filter(obs => obs !== observer);
    }

    notify() {
        this.observers.forEach(observer => observer.update());
    }
}

// Observer class
class Observer {
    constructor(name) {
        this.name = name;
    }

    update() {
        console.log(`${this.name} received an update from the subject.`);
    }
}

// Usage
const subject = new Subject();

const observer1 = new Observer('Observer 1');
const observer2 = new Observer('Observer 2');

subject.attach(observer1);
subject.attach(observer2);

subject.notify();

subject.detach(observer2);

subject.notify();
// GreetingService class
class GreetingService {
    greet(name) {
        return `Hello, ${name}!`;
    }
}

// Person class with Dependency Injection
class Person {
    constructor(greetingService) {
        this.greetingService = greetingService;
    }

    sayHello(name) {
        return this.greetingService.greet(name);
    }
}

// Create instances
const greetingService = new GreetingService(); // Create GreetingService instance
const person = new Person(greetingService);    // Inject GreetingService into Person

// Usage
console.log(person.sayHello("Alice")); // Output: Hello, Alice!
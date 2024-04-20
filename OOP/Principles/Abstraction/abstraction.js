class Vehicle {
    constructor(make, model) {
        this.make = make;
        this.model = model;
    }

    // Abstract method for starting the vehicle
    start() {
        throw new Error('Method not implemented');
    }

    // Abstract method for stopping the vehicle
    stop() {
        throw new Error('Method not implemented');
    }
}

class Car extends Vehicle {
    constructor(make, model) {
        super(make, model);
    }

    // Implement the start method for a car
    start() {
        console.log(`Starting the ${this.make} ${this.model}`);
    }

    // Implement the stop method for a car
    stop() {
        console.log(`Stopping the ${this.make} ${this.model}`);
    }
}

const myCar = new Car('Toyota', 'Camry');

myCar.start();
myCar.stop();
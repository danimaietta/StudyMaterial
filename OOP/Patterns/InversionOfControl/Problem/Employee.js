import Car from './Car.js';

class Employee {

    goToOffice() {
        const rentalCar = new Car(10.99, '200 meters north from the central hospital', 1.00);
        rentalCar.drivetoOffice();
    }
    
}

export default Employee;
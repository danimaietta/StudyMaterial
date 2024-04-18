import Employee from "./Employee.js";
import Car from './Car.js';

const rentalCar = new Car(10.99, '200 meters north from the central hospital', 1.00);

const employee = new Employee(rentalCar);

employee.goToOffice();
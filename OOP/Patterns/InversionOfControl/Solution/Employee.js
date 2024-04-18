class Employee {

    constructor(car) {
        this.car = car;
    }

    goToOffice() {
        this.car.drivetoOffice();
    }
    
}

export default Employee;
class Car {
    constructor(rent, direction, tip){
        this.rent = rent;
        this.direction = direction;
        this.tip = tip;
    }

    drivetoOffice(){
        console.log(`Driving to office, 
            rent: ${this.rent}, 
            direction: ${this.direction}, 
            tip: ${this.tip}`
        );
    }
}

export default Car;
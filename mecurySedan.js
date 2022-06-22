//this includes the vehicle class as a module
const VehicleModule = require("./vehicleBaseClass")

//this shows how to call from this module...
let v = new VehicleModule.Vehicle("Mecury", "Sedan", "1965", "color", "mileage");
console.log(v.make)

class Car extends VehicleModule{
    constructor(maximumPassengers, passenger, numberOfWheels, maximumSpeed, Fuel, scheduleService){
    this.maximumPassengers = 5,
    this.passenger = 0,
    this.numberOfWheels = 4,
    this.maximumSpeed = 160,
    this.fuel = 10,
    this.scheduleService = false
    }

    loadPassenger(num) {
        if (this.passenger < this.maxPassengers) {
            if ((num + this.passenger) <= this.maxPassengers) {
                this.passenger = num;
                return this.passenger;               
            } else {
                console.log(this.model + " " + this.make + " does not have enough space to take all the passengers.");
            }
        } else {
            console.log(this.model + " " + this.make + " is full");
        }
    }
    start() {
        if (this.fuel > 0) {            
            console.log("engine has started.");
            return this.started = true
        } else {
            console.log("no fuel");
            return this.started = false;
        }
    }
    checkService() {
        if (this.mileage > 30000) {            
            this.scheduleService = true
            return this.scheduleService;                       
        }
    }
}
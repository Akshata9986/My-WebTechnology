//class definition
class Vehicle {
    constructor(name, maker, engine) {
        this.name = name;
        this.maker = maker;
        this.engine = engine;
    }
    getDetails() {
        return `the name of the bike is ${this.name}`;
    }
}
let bike1 = new Vehicle("ninja", "kawasaki", "V6");
console.log(bike1.getDetails());
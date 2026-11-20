
class Dog {
    constructor(Breed, Color, Weight, Age) {
        this.Breed = Breed;
        this.Color = Color;
        this.Weight = Weight;
        this.Age = Age;
    }

    bark() {
        return "The dog is barking";
    }

    getInfo() {
        return `Breed: ${this.Breed},
Color: ${this.Color},
Weight: ${this.Weight} kg,
Age: ${this.Age} years`;
    }
}

const dog1 = new Dog("German Shepherd", "Black", 30, 4);


const dog2 = new Dog("Labrador", "Brown", 25, 3);


console.log(dog1.bark());
console.log(dog1.getInfo());


console.log(dog2.bark());
console.log(dog2.getInfo());






class Vehicle {
    constructor(brand, speed) {
        this.brand = brand;
        this.speed = speed;
    }

    describe() {
        return `${this.brand} moves at${this.speed} kmh.`;
    }
}

class ElectricCar extends Vehicle {
    constructor(brand, speed, batteryLife) {
        super(brand, speed);
        this.batteryLife = batteryLife;
    }

    
    describe() {
        return `${super.describe()} Battery life ${this.batteryLife} hour.`;
    }
}


const car = new ElectricCar("Tesla", 200, 44);


console.log(car.describe());

class MathTools {
    static squareRoot(number) {
        return Math.sqrt(number);
    }

   static power(a, b) {
    return Math.pow(a, b);
}

    static add(a, b) {
        return a + b;
    }

    static subtract(a, b) {
        return a - b;
    }

    static multiply(a, b) {
        return a * b;
    }

    static divide(a, b) {
        return a / b;
    }
}


console.log(MathTools.squareRoot(25)); 
console.log(MathTools.power(2, 3));    
console.log(MathTools.add(10, 5));      
console.log(MathTools.subtract(10, 5));
console.log(MathTools.multiply(10, 5));
console.log(MathTools.divide(10, 5));  








class Car {
    brand;
    #mileage = 0;

    #isValidKm(km) {
        return km > 0;
    }

    drive(km) {
        if (this.#isValidKm(km)) {
            this.#mileage += km;
        }
    }

    getMileage() {
        return this.#mileage;
    }
}

const car1 = new Car();

car1.brand = "Maserati";

car1.drive(100);
car1.drive(50);
car1.drive(10);

console.log(car1.brand);     
console.log(car1.getMileage()); 
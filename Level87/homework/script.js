class Animal {
    constructor(name) {
        this.name = name;
    }

    makeSound() {
        console.log("animal will speak");
    }
}

class Dog extends Animal {
    constructor(name, breed) {
        super(name);
        this.breed = breed;
    }

    makeSound() {
        console.log(`${this.name} barking!`);
    }
}

const dog = new Dog("doom", "pitbull");

dog.makeSound();
console.log(dog.breed);
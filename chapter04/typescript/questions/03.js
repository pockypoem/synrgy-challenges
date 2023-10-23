class Car {
    constructor(brand, colors) {
        this.brand = brand;
        this.colors = colors;
    }

    description() {
        return `This is ${this.brand}, It comes in ${this.colors.length} colors`;
    }
}

const ESEMKA = new Car("Esemka", ["Red", "Green", "Blue"]);

ESEMKA.description() // This is Esemka, It comes in 3 colors
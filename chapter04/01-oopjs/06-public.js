class Human {
    constructor(name, address) {
        this.name = name;
        this.address = address;
    }

    // This is public instance method
    introduce() {
        console.log(`Hello, my name is ${this.name}`);
    }

    // This is public static method
    static isEating(food) {
        let foods = ["plant", "animal"];
        return foods.includes(food.toLowerCase());
    }

}


let mj = new Human("Michael Jackson", "Isekai");
console.log(mj);
// Output: Human {name: "Michael Jackson", address: "Isekai"}

console.log(mj.introduce()); 
console.log(Human.isEating("Plant")); // true
console.log(Human.isEating("Human")); // false
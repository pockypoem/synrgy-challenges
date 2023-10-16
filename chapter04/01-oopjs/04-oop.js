class Human {
    // Add static property
    static isLivingOnEarth = true;

    // Add constructor method
    constructor(name, address) {
        this.name = name;
        this.address = address;
    }

    // Add instance method signature
    introduce() {
        console.log(`Hi, my name is ${this.name}`);
    }

    work() {
        console.log("Work!");
    }

}


console.log(Human.isLivingOnEarth); // Output static property: true


// Add property instance method
Human.prototype.greet = function(name) {
    console.log(`Hi, ${name}, I'm ${this.name}`);
}


// Add static method
Human.destroy = function(thing) {
    console.log(`Human is destroying ${thing}`);
}

console.log(Human);

// Instantiation of Human class, we create a new object.
let mj = new Human("Michael Jackson", "Isekai");
console.log(mj);
// Output: Human {name: "Michael Jackson", address: "Isekai"}

// checking instance of class
console.log(mj instanceof Human); // true
console.log(mj.introduce()); // Hi, my name is Michael Jackson
console.log(mj.work()); //Work!
console.log(mj.greet("Donald Trump")); // Hi, Donald Trump, I'm Michael Jackson
console.log(Human.destroy("Amazon Forest")); // Human is destroying Amazon Forest



// create a child class from Human
class Programmer extends Human {
    constructor(name, address, programmingLanguages) {
        super(name, address)
        // call the super/parent class constructor, in this case Person.constructor
        this.programmingLanguages = programmingLanguages;
    }

    introduce() {
        super.introduce();
        // Call the super class instance method.
        console.log(`I can write ${this.programmingLanguages}`);
    }

    code() {
        console.log("Code some", this.programmingLanguages[Math.floor(Math.random() * this.programmingLanguages.length)])
    }
}


// Initiate from Human directly
let Obama = new Human("Barack Obama", "Washington DC");
Obama.introduce() // Hi, my name is Barack Obama

let Isyana = new Programmer("Isyana", "Jakarta", ["Javascript", "Kotlin", "Python"]);
Isyana.introduce(); // Hi, my name is Isyana; I can write ["Javascript", "Kotlin", "Python"]
Isyana.code(); // Code some Javascript/Ruby/.... 
Isyana. work(); // Call super class method that isn't overrided or overloaded

try {
    // Obama can't code since Obama is an direct instance of Human, which don't have code method
    Obama.code() // Error: Undefined method "code"
} catch (err) {
    console.log(err.message);
}

console.log(Isyana instanceof Human); // true
console.log(Isyana instanceof Programmer); // true
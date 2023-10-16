class Human {
    constructor(name, address) {
        this.name = name;
        this.address = address;
    }

    // Private method
    #doGossip = () => {
        console.log(`My address will become viral ${this.address}`);
    }

    talk() {
        console.log(this.#doGossip()); // Call the private method
    }

    static #isHidingArea = true;

}


let mj = new Human("Michael Jackson", "Isekai");
console.log(mj.talk()); // Will run, won't return error!
// Output: My address will become viral Isekai
try {
    Human.#isHidingArea; // Will return an error!
    mj.#doGossip(); // Won't run, will return error!
} catch (err) {
    console.error(err);
}

// Private field '#isHidingArea' must be declared in an enclosing class 
function sayHiTo(name) {
    let halo = `Hai ${name.toUpperCase()}!`;
    return halo;
}

let test1 = sayHiTo("everything");
console.log(test1);
// Output: Hai EVERYTHING!

// let test2 = sayHiTo(100);
// console.log(test2);

// Output: TypeError: name.toUpperCase is not a function
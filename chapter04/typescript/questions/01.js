function add(a, b) {
    return a + b;
}

function greeting(name) {
    return "Hello " + name;
}

function sumAll(numbers) {
    return numbers.reduce((acc, curr) => acc + curr, 0);
}

console.log(add(1, 3)); // 4
console.log(greeting("Jungkook"));
console.log(sumAll([1,2,3,4,5]));
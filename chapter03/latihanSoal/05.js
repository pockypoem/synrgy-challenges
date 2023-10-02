function cekJarak(inputString) {
    const indexA = inputString.indexOf('a');
    const indexB = inputString.indexOf('b');

    if(Math.abs(indexA - indexB) < 3 || indexA === -1 || indexB === -1) {
        return "NO";
    }

    return "YES";

}

const input = "axxxxxxxb";
const result = cekJarak(input);
console.log(result);
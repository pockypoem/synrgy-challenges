function getSquareArea(size) {
    size * size;
}

function getCubeVolume(size) {
    return getSquareArea(size) * size;
}

const x = getCubeVolume(2);
console.log(x);
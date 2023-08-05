function findMaxNumber(a, b, c) {
    let maxNumber = a;
    if (maxNumber < b) {
        maxNumber = b;
    }

    if (maxNumber < c) {
        maxNumber = c;
    }

return maxNumber;
}

console.log(findMaxNumber(20, 1, 30));
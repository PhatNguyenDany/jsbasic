const randomArray = [];
for (let i = 0; i < 10; i++) {
    const randomValue = Math.floor(Math.random() * 100) + 1;
    randomArray.push(randomValue);
}
console.log(randomArray);

function findOddArray(abc) {
    const oddNumber = [];
    for (let a = 0; a < abc.length; a++) {
        const num = abc[a];
        if (num % 2 != 0) {
            oddNumber.push(num);
        }
    }
    return oddNumber;
}
console.log(findOddArray(randomArray));

function minOddArray(oddNumber) {
    let minOdd = oddNumber[0];
    for (let b = 0; b < oddNumber.length; b++) {
        if (minOdd > oddNumber[b]) {
            minOdd = oddNumber[b];
        }
    }
    return minOdd;
}
const c = findOddArray(randomArray)

console.log("minOdd: " , minOddArray(c));


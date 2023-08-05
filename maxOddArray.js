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

function maxOddArray(oddNumber) {
    let maxOdd = oddNumber[0];
    for (let b = 0; b < oddNumber.length; b++) {
        if (maxOdd < oddNumber[b]) {
            maxOdd = oddNumber[b];
        }
    }
    return maxOdd;
}
const c = findOddArray(randomArray)

console.log(`Max Odd Array: `,maxOddArray(c));

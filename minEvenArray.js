const randomArray = [];
for (let i = 0; i < 10; i++) {
    const randomValue = Math.floor(Math.random() * 100) + 1;
    randomArray.push(randomValue);
}
console.log(randomArray);

function findEvenArray(randomArr) {
    const evenNumber = []
    for (let a = 0; a < randomArr.length; a++) {
        const num = randomArr[a];
        if (num % 2 == 0) {
            evenNumber.push(num);
        }
    }
    return evenNumber;
}
console.log(findEvenArray(randomArray));

function findMinEvenArray(evenNumber) {
    let minEven = evenNumber[0];
    for (let b = 0; b < evenNumber.length; b++) {
        if (minEven > evenNumber[b]) {
            minEven = evenNumber[b];
        }
    }
    return minEven;
}
let c = findEvenArray(randomArray);
console.log(findMinEvenArray(c));
const randomArray = [];
for (let i = 0; i < 10; i++) {
    const randomValue = Math.floor(Math.random() * 100) + 1;
    randomArray.push(randomValue);
}
console.log(randomArray);

function sumOddArry(sumTotalOdd) {
    let sumOdd = (0);
    for (let i = 0; i < randomArray.length; i++) {
        if (randomArray[i] % 2 != 0) {
            sumOdd = randomArray[i] + sumOdd;
        }
    }
    return sumOdd;
}
console.log(sumOddArry(randomArray));
function getRandomArray(min, max, arrayLength) {
    const randomArray = [];
    min = Math.ceil(min);
    max = Math.floor(max);
    for (let i = 0; i < arrayLength; i++) {
        const randomValue = Math.floor(Math.random() * (max - min + 1)) + min;
        randomArray.push(randomValue);
    }
    return randomArray;
}

function twoDAray(arrayLength) {
    const twoDArray1 = [];
    for (let a = 0; a < arrayLength; a++) {
        let arrayNumber = getRandomArray(-99, 99, arrayLength);
        twoDArray1.push(arrayNumber)
    }
    return twoDArray1;
}
arr = twoDAray(5);
console.log(`Mảng hai chiều : `, arr);

function findOddNumber(two2DArray) {
    let sum = 0;
    for (let i = 0; i < two2DArray.length; i++) {
        for (let j = 0; j < two2DArray[i].length; j++) {
            if (two2DArray[i][j] > 0) {
                console.log(two2DArray[i][j]);
                sum = sum + two2DArray[i][j];
            }
        }
    }
    return sum;
}
console.log(" Tổng các số dương là: ", findOddNumber(arr));
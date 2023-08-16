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

function sumDiagonal2DArray(twoArray) {
    let sum = 0;
    for (let i = 0; i < twoArray.length; i++) {
        for (let j = twoArray[i].length - i - 1; j < twoArray[i].length; j++) {
            sum = sum + twoArray[i][j];
            break;
        }
    }
    return sum;
}
console.log(`sumDiagonal2D is: `, sumDiagonal2DArray(arr));
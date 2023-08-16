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
        let arrayNumber = getRandomArray(0, 100, arrayLength);
        twoDArray1.push(arrayNumber)
    }
    return twoDArray1;
}
arr = twoDAray(5);
console.log(`Mảng hai chiều : `, arr);

function sumColumArray(array) {
    newSumColums = [];
    for (let i = 0; i < array.length; i++) {
        let sum = 0;
        for (let j = 0; j < array.length; j++) {
            sum = sum + array[j][i];
        }
        newSumColums.push(sum);
    }
    return newSumColums;
}
console.log(`newSumColumArray`, sumColumArray(arr));


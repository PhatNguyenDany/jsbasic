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

function findMaxEvenNumber(twoDArray) {
    let maxEven = 0;
    for (let i = 0; i < twoDArray.length; i++) {
        for (let j = 0; j < twoDArray[i].length; j++) {

            if (twoDArray[i][j] % 2 === 0 && twoDArray[i][j] > 0) {
                if (maxEven === 0 || maxEven < twoDArray[i][j]) {
                    maxEven = twoDArray[i][j];
                }
            }
        }
    }
    return maxEven;
}
console.log(` Số chẵn lớn nhất là: ${findMaxEvenNumber(arr)}`);
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

function findMinOddNumber(twoDArray) {
    let minOdd = 0;
    for (let i = 0; i < twoDArray.length; i++) {
        for (let j = 0; j < twoDArray[i].length; j++) {
            
            if (twoDArray[i][j] > 0 && twoDArray[i][j] % 2 != 0){
                if(minOdd === 0 || twoDArray[i][j] < minOdd) {
                minOdd = twoDArray[i][j];
            }
        }
    }
}
return minOdd;
}
console.log(` Số lẻ nhỏ nhất là: `, findMinOddNumber(arr));
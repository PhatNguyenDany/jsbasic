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
        // giá trị mảng 1 chiều
        let arrayNumber = getRandomArray(-99, 99, arrayLength);
        twoDArray1.push(arrayNumber)
    }
    return twoDArray1;
}
arr = twoDAray(3);
console.log(`Mảng hai chiều : `, arr);

function findNewArray(Array) {
    let newArray = [];
    for (let j = 0; j < Array[0].length; j++) {
        for (i = 0; i < Array.length; i++) {
            newArray.push(Array[i][j])
        }
    }
    return newArray;
}
console.log(findNewArray(arr));

function reverseTwoDArray(twoDArray) {
    let twoNewDArray = [];
    let supLength = arr[0].length;
    let temp = [];
    for (let i = 0; i < twoDArray.length; i++) {
        temp.push(twoDArray[i]);
        if (temp.length == supLength) {
            twoNewDArray.push(temp);
            temp = [];
        }
    }
    return twoNewDArray;
}
console.log(reverseTwoDArray(findNewArray(arr)));

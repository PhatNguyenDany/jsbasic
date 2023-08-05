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

function arrNumber(array) {
    console.log(`string`);
    let newArray = [];

    for (let i = 2; i >= 0; i--) {
        for (let j = array[i].length - 1; j >= 0; j--) {
            newArray.push(array[i][j]);
        }
    }
    return newArray;
}
console.log(" NewArray: ", arrNumber(arr));

function twoDArrayNew(twoDArray) {
    let twoDArrayNew = [];
    let supLength = arr[0].length;
    let temp = [];
    for (let i = 0; i < twoDArray.length; i++) {
        temp.push(twoDArray[i]);
        if (temp.length == supLength) {
            twoDArrayNew.push(temp);
            temp = [];
        }
    }
    return twoDArrayNew;
}
console.log(twoDArrayNew(arrNumber(arr)));
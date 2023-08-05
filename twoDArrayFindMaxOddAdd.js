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

function findMinOddNumberAdd(twoDArray, add) {
    let min = Infinity;
    let hieuMin = Infinity;
    first = false;
    for (let i = 0; i < twoDArray.length; i++) {
        for (let j = 0; j < twoDArray[i].length; j++) {
            if (twoDArray[i][j] % 2 != 0 && hieuMin > twoDArray[i][j] - add && twoDArray[i][j] - add > 0) {
                min = twoDArray[i][j];
                hieuMin = min - add;
                console.log(" min là : ", (min) + "hiệu min là : ", (hieuMin));
            }
            if (add < twoDArray[i][j] && twoDArray[i][j] % 2 != 0 && !first) {
                min = twoDArray[i][j];
                hieuMin = min - add;
                first = true;
            }
        }
    }
    return min;
}
console.log(" Số lẻ nhỏ nhất lớn hơn add là: ", findMinOddNumberAdd(arr, 35));
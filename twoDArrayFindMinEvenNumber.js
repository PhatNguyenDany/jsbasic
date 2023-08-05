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
        let arrayNumber = getRandomArray(0, 99, arrayLength);
        twoDArray1.push(arrayNumber)
    }
    return twoDArray1;
}
arr = twoDAray(5);

function findMinEvenNumber(twoDArray) {
    let sum = 0;
    newEvenArray = [];
    for (let i = 0; i < twoDArray.length; i++) {
        for (let j = 0; j < twoDArray[i].length; j++) {
            if (twoDArray[i][j] > 0) {
                console.log(` Giá trị tại i: ${i}  j: ${j}`, twoDArray[i][j]);
                sum = sum + twoDArray[i][j];
            }
            console.log(`sum là :`, sum)
            if (twoDArray[i][j] % 2 === 0) {
                newEvenArray.push(twoDArray[i][j])
            }
        }
    }
    let average = Math.floor(sum / (twoDArray.length * twoDArray[0].length));
    console.log(` Average là: `, average);
    console.log(`NewArray : ${newEvenArray}`);
    let maxEven;
    let hieuMin;
    first = false;
    for (let b = 0; b < newEvenArray.length; b++) {
        if (hieuMin > average - newEvenArray[b] && average - newEvenArray[b] > 0) {
            maxEven = newEvenArray[b];
            hieuMin = average - newEvenArray[b];
        }

        if (average > newEvenArray[b] && !first) {
            maxEven = newEvenArray[b];
            hieuMin = average - newEvenArray[b];
            first = true;
        }
    }
    return maxEven;
}
console.log(` Số chẵn lớn nhất nhỏ hơn average là : `, findMinEvenNumber(arr));
console.log(`Mảng hai chiều : `, arr);


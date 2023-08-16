randomArray = [];
for (let i = 0; i < 10; i++) {
    randomValue = Math.floor(Math.random() * 20 + 1);
    randomArray.push(randomValue);
}
console.log(`randomArray is:`, randomArray);

function squareNumber(array) {
    newSquareArray = [];
    for (let i = 0; i < array.length; i++) {
        temp = array[i] * array[i];
        newSquareArray.push(temp);
    }
    return newSquareArray;
}
console.log(`squareNumber is :`, squareNumber(randomArray));
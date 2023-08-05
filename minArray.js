const randomArray = [];
for (let i = 0; i < 10; i++) {
    const randomValue = Math.floor(Math.random() * 100) + 1;
    randomArray.push(randomValue);
}
console.log(randomArray);
function minArray(randomArray) {
    let minRandomArray = randomArray[0];
    for (let index = 1; index < randomArray.length; index++) {
        if (minRandomArray > randomArray[index]) {
            minRandomArray = randomArray[index];
        }
    }
    return minRandomArray;
}
console.log(minArray(randomArray));
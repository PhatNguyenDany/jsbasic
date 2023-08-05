const randomArray = [];

for (let i = 0; i < 10; i++) {
    const randomValue = Math.floor(Math.random() * 50) + 1;
    randomArray.push(randomValue);
}
console.log(randomArray);


function maxArray(randomArray) {
    let maxRandomArray = randomArray[0];
    for (let index = 1; index < randomArray.length; index++) {
        if (maxRandomArray < randomArray[index]) {
            maxRandomArray = randomArray[index];
        }
    }
    return maxRandomArray;
}
console.log("Max Array: " , maxArray(randomArray));





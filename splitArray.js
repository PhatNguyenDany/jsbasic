const randomArray = [];
for (let i = 0; i < 10; i++) {
    const randomValue = Math.floor(Math.random() * 100) + 1;
    randomArray.push(randomValue);
}
console.log(`RandomArray: `, randomArray);

function splitArray(arr, num) {
    const splitArray = [];
    for (i = 0; i < arr.length; i += num) {
        const temp = [];
        for (j = i; j < i + num && j < arr.length; j++) {
            temp.push(arr[j]);
        }
        splitArray.push(temp);
    }
    return splitArray;
}
console.log(splitArray((randomArray), 4));

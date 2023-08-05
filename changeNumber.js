const randomArray = [];
for (let i = 0; i < 20; i++) {
    const randomValue = Math.floor(Math.random() * 10);
    randomArray.push(randomValue);
}
console.log(randomArray);

function findNumber(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 0) {
            console.log("Đây là số 0");
        }
        else if (arr[i] === 1) {
            console.log("Đây là số 1");
        }
        else if (arr[i] === 2) {
            console.log("Đây là số 2");
        }
        else if (arr[i] === 3) {
            console.log("Đây là số 3");
        }
        else if (arr[i] === 4) {
            console.log("Đây là số 4");
        }
        else if (arr[i] === 5) {
            console.log("Đây là số 5");
        }
        else if (arr[i] === 6) {
            console.log("Đây là số 6");
        }
        else if (arr[i] === 7) {
            console.log("Đây là số 7");
        }
        else if (arr[i] === 8) {
            console.log("Đây là số 8");
        }
        else if (arr[i] === 9) {
            console.log("Đây là số 9");
        }
    }
}
console.log(findNumber(randomArray));
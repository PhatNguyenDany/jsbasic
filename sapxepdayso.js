const randomArray = [];
for (let i = 0; i < 10; i++) {
    const randomValue = Math.floor(Math.random() * 100) + 1;
    randomArray.push(randomValue);
}
console.log(randomArray);

function removeDuplicateNumber(array) {
    let newArray = [];

    for (let i = 0; i < array.length; i++) {
        let isDuplicate = false;

        for (let a = 0; a < newArray.length; a++) {
            if (array[i] == newArray[a]) {
                isDuplicate = true;
            }
        }
        if (isDuplicate == false) {
            newArray.push(array[i]);
        }
    }
    return newArray;
}
console.log('removerDuplicateNumber: ', removeDuplicateNumber(randomArray));
let uniqueArray = removeDuplicateNumber(randomArray);

function sapxepNewArray(arr) {
    let n = uniqueArray.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++)
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j +1]= temp;
            }
    }
    return arr;
}
console.log( sapxepNewArray(uniqueArray));
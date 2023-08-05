function createArray(n) {
    let array = [];
    for (let i = 1; i <= n; i++) {
        array.push(i);
    }
    return array;
}
// [1,2,3,....,50]
let newArray = createArray(50);
function sumArray(newArray) {
    let sum = 0;
    for (let a = 0; a < newArray.length; a++) {

        sum = sum + newArray[a];
    }
    return sum;
}
console.log('mang: ', newArray);
console.log('tong: ', sumArray(newArray));

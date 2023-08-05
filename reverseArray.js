function increasingArray(num) {
    let increasing = [];
    for (let i = 1; i <= num; i++) {
        increasing.push(i);
    }
    return increasing;
}
let newIncreasing = increasingArray(20);
console.log(newIncreasing);

function reverseArray(numArr) {
    let reverseArray = [];
    for (let a = numArr.length - 1; a >= 0; a--) {
        reverseArray.push(numArr[a]);
    }
    return reverseArray;
}
console.log(reverseArray(newIncreasing));
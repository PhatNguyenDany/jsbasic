

function fibonacci(arr) {
    const fibonacciArray = [0, 1];

    for (let i = 2; i < arr; i++) {
        nextNum = fibonacciArray[i - 1] + fibonacciArray[i - 2];
        fibonacciArray.push(nextNum);
    }
    return fibonacciArray;
}
const b = 20;
const newArray = fibonacci(b);
console.log(newArray);

function findMinNumber(arrayNumber, add) {
    let max;
    let hieuMax;
    let first = false;
    for (let i = 0; i <= arrayNumber.length; i++) {

        if (hieuMax > add - arrayNumber[i] && add - arrayNumber[i] > 0) {
            max = arrayNumber[i];
            hieuMax = add - max;
        }

        if (add > arrayNumber[i] && !first) {
            max = arrayNumber[i];
            hieuMax = add - max;
            first = true;
        }
    }
    return max;
}
console.log(findMinNumber(newArray, 210));
const numberX = findMinNumber(newArray, 210)

function final(finalArray) {
    newArrayX = [];
    for (let i = 0; i < finalArray.length; i++) {
        if (finalArray[i] <= numberX) {
            console.log(` ${i}  `, finalArray[i]);
            newArrayX.push (finalArray[i]);
        }
    }
    return newArrayX;
}
console.log(final(newArray));


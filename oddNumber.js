randomArray = [];
for (let i = 0; i < 10; i++) {
    randomValue = Math.floor(Math.random() * 100 + 1);
    randomArray.push(randomValue);
}
console.log(` randomArray is: `, randomArray);

function sumArray(arr) {
    sum = 0;
    let maxOdd = 0;
    newArrayOdd = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 != 0) {
            newArrayOdd.push(arr[i]);
            sum = sum + arr[i];
            if (arr[i] > maxOdd) {
                maxOdd = arr[i];
            }

        }
    }
    console.log(`sumAllOddNum is: `, sum);
    console.log(`maxOdd is : `, maxOdd);
    return newArrayOdd;
}
console.log(`newArrayOdd is : `, sumArray(randomArray));

function reverseArray(array) {
    let temp;
    for (let a = 0; a < array.length; a++) {
        for (let b = a; b < array.length; b++) {
            if (array[b] < array[a]) {
                temp = array[a];
                array[a] = array[b];
                array[b] = temp;
            }
        }
    }
    return array;
}
let a = reverseArray(newArrayOdd);
console.log(`ReverseArray is : `, a);
threeNumMax = a.slice(a.length - 3, a.length);
console.log(`threeNumMax is: `, threeNumMax);
sumThreeNumOdd = threeNumMax[0] + threeNumMax[1] + threeNumMax[2];
console.log(`sumThreeNum is: `, sumThreeNumOdd);


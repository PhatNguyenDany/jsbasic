const randomArray = [];
for (let i = 0; i < 10; i++) {
    const randomValue = Math.floor(Math.random() * 100) + 1;
    randomArray.push(randomValue);
}
console.log(`RandomArray: `, randomArray);

function findNumber(number) {
    let sum = 0;
    for (let a = 0; a < number.length; a++) {
        sum = sum + number[a];
    }
    return sum / number.length;
}
const average = findNumber(randomArray);
console.log('giá trị trung bình: ', average);

function findMinNumberX(arrayNumber, add) {
    let min = Infinity;
    let hieuMin = Infinity;
    let first = false;
    for (let i = 0; i <= arrayNumber.length; i++) {

        if (hieuMin > arrayNumber[i] - add && arrayNumber[i] - add > 0) {
            min = arrayNumber[i];
            hieuMin = min - add;
        }

        if (add < arrayNumber[i] && !first) {
            min = arrayNumber[i];
            hieuMin = min - add;
            first = true;
        }
    }
    return min;
}
console.log(`Số nhỏ nhất lớn hơn average là : `, findMinNumberX(randomArray, average));



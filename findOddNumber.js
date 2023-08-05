const number = [2, 4, 7, 9, 3, 6]
function findOddNumber(number) {
    const oddNumber = [];
    for (let i = 0; i < number.length; i++) {
        const num = number[i];
        if (num % 2 != 0) {
            oddNumber.push(num);
        }
    }
    return oddNumber;
}
console.log(findOddNumber(number));
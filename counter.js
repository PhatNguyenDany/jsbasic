
function findNumber(number) {
    let num;
    let count = 0;
    for (let i = 0; i < number.length; i++) {
        let temp = 0;

        for (let j = i; j < number.length; j++) {
            if (number[i] === number[j]) {
                num = number[i];
                temp = temp + 1;
                console.log(`i: ${i}, num:  ${num} , temp: ${temp}`);
            }
            if (temp > count) {
                count = temp;
                num = number[i];
            }
        }

    }
    return `${num}, ${count}`;
}
console.log(findNumber(arr = [1, 6, 2, 3, 4, 5, 5, 5, 7, 8, 9, 9, 9, 9, 9, 9]));
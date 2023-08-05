function increasingArray(num) {
    let increasing = [];
    for (let i = 1; i <= num; i++) {
        increasing.push(i);
    }
    return increasing;
}
let newIncreasing = increasingArray(9);
console.log(newIncreasing);

function changeArray(number) {
    middleArray = Math.floor(number.length / 2);

    for (let a = 0; a <= middleArray; a++) {
        let tam = number[a];
        number[a] = number[number.length - 1 - a];
        number[number.length - 1 - a] = tam;
    }
    return number;
}
console.log(changeArray(newIncreasing));

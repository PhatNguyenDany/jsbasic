function getRandomInt(min, max) {
    const randomArray = [];
    min = Math.ceil(min);
    max = Math.floor(max);
    for (let i = 0; i < 20; i++) {
        const randomValue = Math.floor(Math.random() * (max - min + 1)) + min;
        const number = Math.floor(randomValue / 10);
        if (randomValue % 2 != 0 && number % 2 != 0) {
            randomArray.push(randomValue);
        }
    }
    return randomArray;
}
arrayOdd = getRandomInt(10, 99);
console.log(` dãy số lẻ có chữ số đầu tiên là số lẻ:`, arrayOdd);



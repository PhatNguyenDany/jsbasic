function getRandomInt(min, max) {
    const randomArray = [];
    min = Math.ceil(min);
    max = Math.floor(max);
    for (let i = 0; i < 20; i++) {
        const randomValue = Math.floor(Math.random() * (max - min + 1)) + min;
        let number = Math.floor(randomValue / 10)
        if (number % 2 != 0) {
            console.log (` randomValue: `,randomValue)
            let a = randomValue % 100;
            console.log(` số a là: `, a);
            let b = Math.floor(a / 10)
            randomArray.push(b);
            console.log(`số b là :`, (b));
        }
    }
    return randomArray;
}
array = getRandomInt(100, 999);
console.log(` dãy số có chữ số giữa là số lẻ:`, array);
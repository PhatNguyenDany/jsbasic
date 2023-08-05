const randomArray = [];
for (let i = 0; i < 10; i++) {
    const randomValue = Math.floor(Math.random() * 100) + 1;
    randomArray.push(randomValue);
}
console.log(`RandomArray: `, randomArray);

function sumNumberArray(number) {

    for (let i = 0; i < number.length; i++) {
        for (let j = i + 1; j < number.length; j++) {
            if (number[i] < number[j]) {
                let tam = number[i];
                number[i] = number[j];
                number[j] = tam;
            }
        }
    }
    return number;
}
console.log(`Day so moi: `,sumNumberArray(randomArray));
let newNumber = sumNumberArray(randomArray);
console.log(` Sum cua ba so: `,newNumber[0] + newNumber[1] + newNumber[2]);
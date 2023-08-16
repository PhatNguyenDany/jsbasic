randomArray = [];
for (let i = 0; i < 20; i++) {
    randomValue = Math.floor(Math.random() * 7 + 1);
    randomArray.push(randomValue);
}
console.log(`randomArray is: `, randomArray);

function removingDuplicates(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (array[i] === array[j]) {
                array.splice(j, 1);
                j--;
            }
        }
    }
    return array;
}
console.log(removingDuplicates(randomArray));
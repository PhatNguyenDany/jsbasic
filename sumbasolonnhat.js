const randomArray = [];
for (let i = 0; i < 10; i++) {
    const randomValue = Math.floor(Math.random() * 100) + 1;
    randomArray.push(randomValue);
}
console.log(randomArray);

function findMinNumber(arrayNumber, add) {
    let min;
    let hieuMin;
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

function sapxep(number) {
    let newArray = [];
    let min = 0;

    for (let i = 0; i < number.length; i++) {
        min = findMinNumber(number, min)
        newArray.push(min);
    }
   
    return newArray;
}
let final = sapxep(randomArray);
console.log(final[final.length-1] +final[final.length-2]+ final[final.length-3]);






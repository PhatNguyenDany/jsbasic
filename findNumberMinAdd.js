function findMinNumberX(arrayNumber, add) {
    let min;
    let hieuMin;
    let first = false;
//     for (let i = 0; i < arrayNumber.length; i++) {


//         if (hieuMin > arrayNumber[i] - add && arrayNumber[i] - add > 0) {
//             min = arrayNumber[i];
//             hieuMin = min - add;
//         }

//         if (add < arrayNumber[i] && !first) {
//             min = arrayNumber[i];
//             hieuMin = min - add;
//             first = true;
//         }
//     }
//     return min;
// }
let i = 0;
while (i< arrayNumber.length) {

    if (hieuMin > arrayNumber[i] - add && arrayNumber[i] - add > 0) {
                    min = arrayNumber[i];
                    hieuMin = min - add;
                }
        
                if (add < arrayNumber[i] && !first) {
                    min = arrayNumber[i];
                    hieuMin = min - add;
                    first = true;
                }
                i++;
            }
            
            return min;
            
}

const randomArray = [];
for (let i = 0; i < 10; i++) {
    const randomValue = Math.floor(Math.random() * 100) + 1;
    randomArray.push(randomValue);
}
console.log(randomArray);
console.log(findMinNumberX(randomArray, 7));

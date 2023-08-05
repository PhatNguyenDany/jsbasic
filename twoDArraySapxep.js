let mat = [[5, 4, 7], [1, 3, 8], [2, 9, 6]];
function findNewArray(arr) {
    newArray = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            newArray.push(arr[i][j]);
        }
    } return newArray;
}
console.log(`NewArray là : `, findNewArray(mat));

function sapxepNewArray(arrNum) {
    let n = arrNum.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (arrNum[j] > arrNum[j + 1]) {
                let temp = arrNum[j];
                arrNum[j] = arrNum[j + 1];
                arrNum[j + 1] = temp;
            }
        }
    } return arrNum;
}
let a = sapxepNewArray(newArray);
console.log("sapxepNewArray: ", a);


console.log('--------mat---------', mat);
function twoDArrayTang(arrTang) {
    let twoDArray = [];
    let temp = [];
    // Độ dài mảng hai chiều
    let twoDlength = mat[0].length;
    for ( let i = 0; i < arrTang.length; i++){
        temp.push(arrTang[i]);
        if ( temp.length == twoDlength ){
            twoDArray.push(temp);
            temp = [];
        }
    }
    return twoDArray;
}
console.log(twoDArrayTang(a));



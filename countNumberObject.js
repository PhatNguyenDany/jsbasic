twoDArray = [[4, 18, 22, 25, 33, 48, 2],
[16, 23, 25, 26, 29, 40, 32],
[3, 11, 13, 31, 33, 45, 27],
[12, 23, 42, 44, 51, 52, 3],
[9, 15, 23, 25, 27, 34, 41],
[5, 34, 36, 38, 47, 50, 26],
[10, 11, 19, 28, 42, 47, 16],
[2, 16, 31, 37, 38, 48, 36],
[3, 4, 30, 34, 36, 49, 8],
[24, 40, 44, 46, 47, 49, 5],
[8, 11, 23, 43, 44, 48, 41],
[7, 12, 29, 39, 46, 55, 1],
[4, 13, 14, 23, 33, 50, 41],
[13, 33, 36, 38, 45, 50, 25],
[1, 11, 12, 28, 46, 54, 40],
[2, 12, 15, 16, 27, 28, 47],
[8, 9, 16, 20, 50, 53, 3],
[2, 11, 14, 35, 43, 51, 55],
[7, 23, 26, 31, 35, 53, 32],
[7, 13, 23, 34, 38, 40, 55],
[10, 11, 25, 39, 46, 55, 40],
[4, 14, 18, 27, 47, 50, 33],
[10, 17, 27, 32, 35, 41, 54],
[3, 36, 38, 43, 51, 53, 2],
[1, 14, 23, 27, 44, 50, 43],
[23, 28, 29, 36, 38, 41, 7],
[3, 18, 40, 41, 46, 47, 36],
[1, 14, 24, 28, 40, 46, 34],
[4, 6, 8, 18, 39, 43, 28],
[15, 16, 19, 31, 33, 46, 7],
[26, 27, 35, 36, 47, 54, 40],
[1, 14, 21, 36, 48, 53, 44]]


function countNumberArray(arr) {

    const countNumber = {};
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            if (countNumber[arr[i][j]] != undefined) {
                countNumber[arr[i][j]] = countNumber[arr[i][j]] + 1;
            } else {
                countNumber[arr[i][j]] = 1;
            }
        }
    }
    return countNumber;
}
console.log(`count Number: `, countNumberArray(twoDArray));
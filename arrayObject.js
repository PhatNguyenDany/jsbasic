// tạo mảng chứa 10 Object, mỗi object có tên tuổi email
const array = [];

for (let i = 0; i < 10; i++) {
    const person = {
        name: `Person ${i + 1}`,
        age: Math.floor(Math.random() * 60) + 1, // Giả sử tuổi từ 1 đến 60
        email: `person${i + 1}@example.com`
    };
    array.push(person);
}
console.log(array);


// function findAgeAbove18(arrayRandom) {
//     let count = 0;
//     let temp = 0;
//     for (let i = 0; i < arrayRandom.length; i++) {
//         if (arrayRandom[i].age > 18 && arrayRandom[i].age < 35) {
//             temp = temp + 1;
//             console.log ( `i ${i}`);
//             console.log( `temp : ${temp}`);
//         }
//         if (temp > count) {
//             count = temp;
//         }
//     }
//     return count;
// }
// const a = findAgeAbove18(array);
// console.log(` số người từ 18 - 25 là :`, a);


// function findName(arrayName) {
//     const newArrayName = [];
//     for (let i = 0; i < arrayName.length; i++) {
//         delete arrayName[i].age && delete arrayName[i].email;
//         newArrayName.push(arrayName[i]);
//     }
//     return newArrayName;
// }
// console.log(findName(a));

// function findIndexArray(arrayFind) {
//     let index = 0;
//     for (let i = 0; i < arrayFind.length; i++) {
//         if (arrayFind[i].name === 'Person 6') {
//             index = i;
//         }
//     }
//     return index;
// }
// console.log(`index là: `, findIndexArray(array));

// function findAgeIncreasing(arrayInput) {
//     let n = arrayInput.length
//     for (let i = 0; i < n - 1; i++) {
//         for (let j = 0; j < n - i - 1; j++)
//             if (arrayInput[j].age > arrayInput[j + 1].age) {
//                 let temp = arrayInput[j].age;
//                 arrayInput[j].age = arrayInput[j + 1].age;
//                 arrayInput[j + 1].age = temp;
//             }

//     }
//     return arrayInput;
// }
// console.log(findAgeIncreasing(array));
// function changeNameMail(arrayChangeName) {

//     for (let i = 0; i < arrayChangeName.length; i++) {
//         if (arrayChangeName[i].name === 'Person 6') {
//            arrayChangeName[i].email = 'emailmoi@gmail.com';

//         }
//     }
// // console.log( `array `, arrayChangeName);
// }
// console.log(changeNameMail(array));

// function changeNameMail(arrayChangeName) {

//     for (let i = 0; i < arrayChangeName.length; i++) {
//         if (arrayChangeName[i].name === 'Person 6') {
//             console.log(` array :  ${arrayChangeName[i].name}`);
//             delete arrayChangeName[i];
//             for (let j = i + 1; j < arrayChangeName.length; j++) {
//                 arrayChangeName[i] = arrayChangeName[i + 1];
//                 i = i + 1;
//             }
//         }
//     }
//     arrayChangeName.length = arrayChangeName.length - 1;
//     console.log(`array `, arrayChangeName);
// }
// console.log(changeNameMail(array));

// function addProperty (arr){
//     for (let i = 0; i < arr.length; i++){
//         arr[i].isActive = true;
//     }
//     console.log ( arr);
// }
// console.log (addProperty ( array));

function sumAge ( arrayObject){
   let  sum = 0;
    for ( let i = 0; i< arrayObject.length; i++ ){
        sum = sum + arrayObject[i].age;
    }
    return sum;
}
console.log( ` sumAge là: `,sumAge(array));
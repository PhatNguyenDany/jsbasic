const array = [];

for (let i = 0; i < 10; i++) {
    const person = {
        name: `Person ${i + 1}`,
        age: Math.floor(Math.random() * 60) + 1, // Giả sử tuổi từ 1 đến 60
        address: `address${i + 1}`
    };
    array.push(person);
}
console.log(array);

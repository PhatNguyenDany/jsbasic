// tạo mảng từ 1-100
function numberArray(arr) {
    let array = [];
    for (let i = 1; i <= arr; i++) {
        array.push(i);
    }
    return array;
}
let newNumberArray = numberArray(100);
console.log(newNumberArray);

function numberPrimeArray(prime) {
    let primeArray = [];
    for (let a = 1; a < prime.length; a++) {
        let isPrime = true;

        for (let b = 2; b < prime[a]; b++) {
            if (prime[a] % b == 0) {
                isPrime = false;
                break;
            }
        }

        if (isPrime) {
            primeArray.push(prime[a]);
        }
    }
    return primeArray;
}
console.log(numberPrimeArray(newNumberArray));
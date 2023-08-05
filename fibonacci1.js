function fibonacci(add) {
    const fibonacciArray = [0, 1];

    for (let i = 2; true; i++) {
        let nextNum = fibonacciArray[i - 1] + fibonacciArray[i - 2];
        if (nextNum <= add) {
            fibonacciArray.push(nextNum);
        } else {
            break;
        }
    }

    // let i = 2;
    // while  (true) {    
    //     let nextNum = fibonacciArray[i - 1] + fibonacciArray[i - 2];
    //     if (nextNum <= add) {
    //         fibonacciArray.push(nextNum);
    //     } else {
    //         break;
    //     }
    //     i++;
    // }

    return fibonacciArray;
}

const newArray = fibonacci(210);
console.log(newArray);


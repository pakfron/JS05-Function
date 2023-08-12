// function checkPrime(num) {
//     let isPrime = true;
//     for (let d = 2; d < num; d++) {
//         if (num % d == 0) {
//             isPrime = false;
//             break;
//         }
//     }
//     if (isPrime) console.log(num);
// }


let checkPrime = (num) => {
    let isPrime = true;
    for (let d = 2; d < num; d++) {
        if (num % d == 0) {
            isPrime = false;
            break;
        }
    }
    if (isPrime) {
        return console.log((num + " is prime number"))
    } else {
        return  console.log((num + " is not prime number"))
    };
}
checkPrime(4)
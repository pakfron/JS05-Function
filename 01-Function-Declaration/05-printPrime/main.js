// function printPrime(number) {
    
//     primeNum=""

//     for(index=1;index<=number;index++){
//         let count=0;
        
//         for(divider=1;divider<=number;divider++){
            
//             if(index%divider===0){
//                 count++
//             };

//         };
//         if (index!==1&&count<=2){primeNum = primeNum+index+" "};
//     };
// console.log(`PrimeNumberถึงเลข  ${number}: `+primeNum);
// }


// printPrime(7); // 2, 3, 5, 7
// printPrime(13); // 2, 3, 5, 7, 11, 13
// printPrime(14); // 2, 3, 5, 7, 11, 13

// for (let i = 1; i <= 100; i++) {
//     let count = 0;
//     for (let j = 1; j <= 100; j++) {
//       if (i % j === 0) {
//         count++;
        
//       }
//     }
//     if (i !== 1 && count <= 2) console.log(i);}

function checkPrime(num) {
    let isPrime = true;
    for (let d = 2; d < num; d++) {
        if (num % d == 0) {
            isPrime = false;
            break;
        }
    }
    if (isPrime) console.log(num);
}

function printPrime(limit) {
    for (let n = 2; n <= limit; n++) {
        checkPrime(n);
    }
}
printPrime(7);
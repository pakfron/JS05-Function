// function Prime(a){

//     count=0
    
//     for(let index=2; index<a;index++){
    
//         if (a%index==0) {

//             count++
            
//         }
//     }
//     // if(isPrime===true)console.log("Number : "+a +" is Prime Number")
    
// if(count<=2){
//     console.log("Number : "+a +" is Prime Number")
// }
// if(count>=2){
//     console.log("Number : "+a +" is not Prime Number")
// }

// // console.log("Number : "+a +" is not Prime Number")
// //     }
// }
// Prime(18)
// Prime(2)
// Prime(5)
// Prime(100)



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


checkPrime(7);
checkPrime(13);
checkPrime(61);
checkPrime(63);
checkPrime(83);
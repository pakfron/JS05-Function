//test push, feedback branch
//update solution

function isPrime(n) {
    
    let isPrime = true
    for (let divider = 2; divider < n; divider++) {
        if (n % divider == 0) {
            isPrime = false
            break;

        }
    }
if(isPrime)console.log(n)
}

isPrime(7)
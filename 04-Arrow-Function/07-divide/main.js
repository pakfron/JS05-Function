const D7 = (num) => {
    if (num % 7 !== 0) {
        return 'not Divisible';
    }
    else {
        return 'Divisible';
    }
}

console.log(D7(9))
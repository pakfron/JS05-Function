const factorial = (num) => {
    num = Number(num)
    answer = 1
    if (num === 0 || num === 1) {
        return console.log(answer)
    } else if (num > 1) {
        for (let index = num; index > 0; index--) {
            answer = answer * index
            console.log(answer, index)
        }
        return answer
    }
}

console.log(factorial(5))
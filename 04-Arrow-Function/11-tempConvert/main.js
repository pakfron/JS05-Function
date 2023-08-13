const farenheit = (c) => {
    c = (c - 32) * 5 / 9
    return c + " Celsius"
}

console.log(farenheit(50))
// บรรทัดที่มี \* , \*\* ให้ผลลัพธ์เป็นอะไร เพราะอะไร


// const square = (n) => {
//     n ** 2;
// };

// console.log(square(7)); // *undefined เพราะไม่ได้ return value







const calcCircleArea = (r) => Math.PI * r ** 2;
console.log(calcCircleArea(3)); // **28.27 เพราะ ฟังชั่นarrow แบบนี้ไม่มีปีกกา ถือว่าreturn value โดยไม่ต้องใส่value

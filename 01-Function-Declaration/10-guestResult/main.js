function sayHi(age) {
    if (age < 12) console.log('Hi kid');
}
console.log(sayHi); // *
console.log(sayHi(10)); // **

//console.log(sayHi); // แสดงฟังชั่นในconsole 
//console.log(sayHi(10)); // alert hi kid แต่ใน console ได้ค่า undefinedเพราะไม่ได้return
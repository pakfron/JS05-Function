// //1 define แบบตั้งชื่อฟังชั่น
// function sayhi(name,lastname){
//     console.log("hello"+name+lastname)
// }


// // 2 call
// sayhi('john','doe')
// sayhi('prayut','chan-o-cha')

// //return value

function add(x,y){
let result = x+y
return result;

}
add (5,6)
let r = add(5,6)

// Checkpoint : 
// Declare : ประกาศเป็น
// Params : รั บ input
// Call : รันฟังชั่น
// Return : เข้าใจเรื่อง return

let a = 5*2+7;

//expression
//-single value : 7
// combine expression : 7+2
//- FN result : add(7,2)

let myFunc = add;
let z = console.log
//variable = FN (FN Expression)

console.log(myFunc(5,2))

z("hi");


// Anonymous FN
// Syntax : FN EXPRESSTION
// อธิบาย : กำลัง assign Anonymous fn ให้กับตัวแปร sayHello

const sayHello = function (name) {
    console.log('Hi '+ name)
}

sayHello("expression");

// 1. function add () {}
// 2A. let add = function () {}
// 2B. let add = () => {}

// const minus =(a,b) => {

//     return a-b;
// }

const minus =(a,b) => a-b;
const minusTwo = a => a-2;
const two =2
console.log(minusTwo(5));
console.log(two())
// console.log("anonymous")

//name fn,FN Declaration
//function add(){}

//#2 : anonymous IIFE

// ( function (x,y) {
//     console.log(x+y);
// })(10,5);
// console.log(

//     ( function (x,y) {
//         return x+y;
//     })(10,5) )

// let a = (function (x, y) {
//     return x + y;
// })(10, 5);

// console.log(a)

//2B

//VARIABLE = EXPRESSION
let myVar = ((5*2*20)/2)%7;
// console.log(myFunc(5,10))
//VARIABLE = FN (FN == EXPRESSION)
const myFunc = function (x,y) {
    return x+y
}

console.log(myFunc(5,10))

//Assign name FN to Variale

const a = console.log;
a('hi')
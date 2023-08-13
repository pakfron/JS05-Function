


let message = "Welcome to Thailand";

function logMessage(message) {
  message = "Hello everybody";
  console.log(message); // * Hello everybody refactor message in function scrop
}

logMessage(message);
console.log(message); // **Welcome to Thailand เอาค่ามาจากglobal scrop

let name = "John";

function sayHi(input) {
  console.log(name); // ***John เอาค่ามาจาก global scrop
  name = input;
}

sayHi();
console.log(name); // ****undefined

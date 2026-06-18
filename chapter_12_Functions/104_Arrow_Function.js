// Arrow Function (ES6)

const greet = function (name1) {
    return "Hi" + name1;
}

let r = greet("Pramod");
console.log(r); // Pramod

// Above is the example of "functions as expression" but this is how 
// Arrow Function is - 
const greet2 = (name1) => "Hi" + name1;
let r2 = greet2("Pramod");
console.log(r2); // / Pramod 

// If you want to make a normal function to arrow function. 
// Remove the keyword "function", keep the only parameters i.e. "name1",
// remove the keyword return, remove the curly braces, and use the =>
// (name1) => "Hi" + name1

const doubleIt = n => n * 2;
console.log(doubleIt(10));
// Here n is 10 which is arguments => the return type will be 10*2 = 20 

const printIt = name => console.log(name);
printIt("Dutta");

// convertion from normal function to arrow function
// Normal Function
function add(a, b) {
    return a + b;
}
// Arrow Function
const add2 = (a, b) => a + b;

// Normal Function
function say() {
    console.log("Hi");
}
// Arrow Function
const say2 = () => 'Hi';
const say1 = () => console.log("Hi"); // We can write console.log("Hi") also

const greet = (name) => {
    const message = "Hi" + name;
    return message;
}
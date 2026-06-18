// Define
function greet() { // During define a function this is called parameters
    console.log("Hi");
}

// This is a Basic type-1 function, which means no argument, no return type. 

// Call
greet(); // During calling time this is called as arguments

let a = greet();
console.log(a); // undefined - because greet() doesn't return anything

// parameters vs arguments
function add(a, b) { // parameters
    return a + b;
}

let result = add(10, 20); // arguments
console.log(result);

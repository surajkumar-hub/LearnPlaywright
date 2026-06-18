// We can store a function and call it later also
const greet = function (name) {
    return `Hello, ${name}`;
}

let r = greet("Pramod");
console.log(r);


// This is a normal Type 4 fn
function greet1(name1) {
    return `Hello, ${name1}!`;
}

// We can make the above Type 4 function to this - Functions as Expression
const greet2 = function (name1) {
    return `Hello, ${name1}!`;
}

console.log(greet1("Bob"));
console.log(greet2("Bob"));
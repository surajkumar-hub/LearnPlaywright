// let is called as block scope variable, which means it is only accessible 
// within the block it is defined in.

let a = 10;

let retryCount = 0;
retryCount = retryCount + 1;
retryCount = retryCount + 1;
console.log("Retry attempt: " + retryCount);

let retryCount = 5; // This is not possible because 'retryCount' has already 
// been declared. This why people love let
// ❌ SyntaxError: redeclaration not allowed

// Block Scope Example:

let testStatus = "pending";

if (testStatus === "pending") {
    let executionTime = 1200;
    console.log("Inside block:", executionTime);   // 1200
}

console.log(executionTime); // ReferenceError: executionTime is not defined

// We can't execute this variable - 'executionTime' outside the block

// Block scope basically means, let can't go outside of this block

/* Block basically means:
{} - Block
if(){}
funcion name(){} */

// let = loyal
// var = varirable / triator

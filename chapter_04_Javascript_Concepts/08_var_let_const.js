/* There are 3 ways to declare a variable in JavaScript: var, let, and const. 
Each has its own characteristics and use cases. */

var v = 10;
let l = 30;
const c = 3.14;

// Redeclaration and reassignment
var browser = "Chrome";
var browser = "Firefox"; // redeclaration allowed
browser = "edge"; // reassignment allowed 
// var can be redeclared and reassigned

// for example:

var testCases = ["login", "logout", "signup"];

for (var i = 0; i < testCases.length; i++) {
    console.log("Running test:", testCases[i]);
}

console.log("Loop counter leaked outside:", i);

/* Ideally, the variable 'i' should be available in the for loop.
Scope of the variable 'i' is inside the for loop,  but since we used 'var', it 
is accessible outside the loop, which can lead to 
unintended consequences if it is used elsewhere in the code. 
This is one of the reasons why 'var' is generally discouraged in modern 
JavaScript development. */

/* if we run the above for loop, you can notice that the value of 'i' will be 3,
which is available outside the loop. Ideally no programming language should 
allow this, but JavaScript does because of the way 'var' works.

O/P: Running test: login
Running test: logout
Running test: signup 

Loop counter leaked outside: 3

*/

// Example of function
console.log("Hi");
console.log("Hi");
console.log("Hi");
/** We can use a function to avoid repetition and make our code more 
maintainable */

function say() {
    console.log("Hi from Function");
}

say();
say();

/* O / P: Hi from Function
Hi from Function */

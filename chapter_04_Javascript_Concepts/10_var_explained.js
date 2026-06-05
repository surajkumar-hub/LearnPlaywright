// Example of function-scoped

var a = 10;// Global SCOPE -> accessible anywhere in the code

// var is function scoped

console.log(a);

function printHello() {
    console.log("Hello TheTestingAcademy!");

    var a = 20; // Local Scope 

    console.log(a); /* O / P: 20 - because we have reassigned the value of "a" 
    inside the function, it will take precedence over the global variable "a" */

    if (true) {
        var a = 30;
        console.log(a); // 30
    }

}

printHello();

var a = 50;

// var == trump, flipper, dual faced, no trust worthy
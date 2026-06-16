let num = prompt("Enter a number:");
num = Number(num);  // convert string to number

if (num % 2 === 0) {
    console.log(num + " is Even");
} else {
    console.log(num + " is Odd");
}

/* Here we can take user input by using prompt but here prompt will not run 
because it is not migrated in the node.js. This will only run in the 
browser console (Browser Developer Tools).
Prompt is actually available in JS engine or browser only.

We"ll get this error - 
let num = prompt("Enter a number:");
          ^
ReferenceError: prompt is not defined

There is an another way - Node.js has a function with the name of readline for
user input. Check the ex- 72_node_readline.js
Node.js basically says us to use a library with the name of readline




*/
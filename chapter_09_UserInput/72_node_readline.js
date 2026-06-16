const readline = require("readline");

// First we have to create an interface. Then we have to open the question
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
// This is where we"ll run our code
rl.question("Enter a number: ", (input) => {
    let num = Number(input);

    if (num % 2 === 0) {
        console.log(num + " is Even");
    } else {
        console.log(num + " is Odd");
    }
    // Close the r1
    r1.close();
});

/* This is also we are not going to use it it automation. Instead of this, 
we can something called prompt sync - This is also used very rarely 
Thare is another library with the name of prompt sync */

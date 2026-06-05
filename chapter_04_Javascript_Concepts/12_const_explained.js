const BASE_URL = "https://app.thetestingacademy.com";
BASE_URL = "https://staging.thetestingacademy.com"; // We can't change the URL
// TypeError: Assignment to constant variable.
const BASE_URL = "https://app.thetestingacademy.com"; // Redeclaration is also
// not possible


let name = "pending";
// let name = "pending"; // Not possible
// We"ll get this error - SyntaxError: Identifier 'name' has already been declared

name = "done";

{
    let name = "Dutta"; // Here we can create another name because this is a 
    // different block
}

// What is the difference between function and block?

function say() {
    let name = "Dutta";
}
say();
say();

// Block can't be recalled but function can be called again and again //
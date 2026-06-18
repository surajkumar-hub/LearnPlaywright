let g_x = 10;

// Nested scope | blocked scope 
function outer() {
    let x = 10;

    function inner() {
        let y = 20;
        console.log(x); // Outer variables can be accessed by inner function 

    }
    inner();
    console.log(y); //Inner varibales can't be accessed outside the function
}
// We have to check - if (ourStatusCode >= 200 && ourStatusCode < 300)

//This is a normal function. 
function validateStatusCode(status) {
    if (status >= 200 && status <= 300) {
        console.log("Request is fine!")
    }
}

// This is a function as an expression 
const validateStatusCode_Exp = function (status) {
    if (status >= 200 && status <= 300) {
        console.log("Request is fine!")
    }
}

// This is Arrow function 
const validateStatusCode_Arrow = (status) => {
    if (status >= 200 && status <= 300) {
        console.log("Request is fine!")
    }
}

validateStatusCode_Arrow();
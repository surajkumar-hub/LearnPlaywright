let config = {};

config.browser = "chrome";
config.timeout = 3000;
config.testname = "login test";

console.log(config); // { browser: 'chrome', timeout: 3000, testname: 'login test' }

if (config.browser === "chrome") {
    console.log("I will execute my TC");
}

delete config.browser; // to delete a key
console.log(config);

// We can create key - value pair inside the curly braces or outside the braces also
// Alternate way to create an object
let config2 = {
    browser = "chrome",
    timeout = 3000,
    testname = "login test"
};
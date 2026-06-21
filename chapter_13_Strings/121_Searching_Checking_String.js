// Searching & Checking

let url = "https://staging.vwo.com/api/login?retry=true";

// incudes
console.log(url.includes("staging")); // true
console.log(url.includes("production")); // false

// startsWith / endsWith
url.startsWith("https"); // true
url.startsWith("http://");  //fasle
url.endsWith("true");  // true


// indexOf / lastIndexOf
console.log(url.indexOf("a"));
console.log(url.lastIndexOf("a"));

console.log(url.indexOf("nothere")); // -1 - it means it doesn't exist at all
console.log(url.indexOf("x")); // 

// search
console.log(url.search(/login/)); // it means - does it contain login
console.log(url.search(/vwo/)); // does it contain vwo

// /regex/ - Regular EXPRESSION - These are nothing but a patterns that you
// can find within the strings automatically. 
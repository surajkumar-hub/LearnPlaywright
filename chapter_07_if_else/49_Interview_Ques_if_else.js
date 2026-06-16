if ("hello") console.log("String is truthy"); // // "hello" = truthy
if (42) console.log("Number is truthy");
if ({}) console.log("Empty object is truthy!");
if ([]) console.log("Empty array is truthy!");

if ("") console.log("Won't print");
if (null) console.log("Won't print");
if (undefined) console.log("Won't print");
if (NaN) console.log("Won't print");
if (0) console.log("Won't print");

// Rule is - ANY NUMBER = 1,2,,3,4,32,45 - TRUTH
// 0 = FALSE

let name = 0;
if (name) {
    console.log("Hi");
} else {
    console.log("Bye");
}

// Output: Bye
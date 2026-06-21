let c = { status: "pass" };
let d = { status: "pass" };
console.log(c);
console.log(d);

// Here both c & d are different object reference 

if (c === d) {
    console.log("true");
} else {
    console.log("false"); // false because c & d are 2 different object ref.
}
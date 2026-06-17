let browser = ['chrome', 'firefox', 'safari', 'opera', 'edge'];
console.log(browser.length); // 5
console.log(browser); // ['chrome', 'firefox', 'safari', 'opera', 'edge']

browser.pop(); // it"ll remove the last element
console.log(browser); // ['chrome', 'firefox', 'safari', 'opera']

let removed = browser.shift(); // it"ll remove the first element
console.log(browser); // chrome
console.log(removed);


for (let i = 0; i < browser.length; i++) {
    console.log(browser[i]);
    if (browser[i] === "opera") {
        console.log("Opera is removed from the selenium!");
    }
}
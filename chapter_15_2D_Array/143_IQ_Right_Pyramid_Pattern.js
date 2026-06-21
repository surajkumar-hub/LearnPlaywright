// n = 3a - n means row. n = 3a means, 3 row
// *
// * *
// * * *
let n = 5;
for (let i = 1; i <= n; i++) {
    let row = " ";
    for (let j = 1; j <= i; j++) {
        row += "*";
    }
    console.log(row.trim());
}
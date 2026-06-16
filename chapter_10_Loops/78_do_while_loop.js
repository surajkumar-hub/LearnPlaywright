let a = 10;
while (a < 10) {
    console.log(a);
    a++;
}

do {
    console.log(a); // 10 - this line will execute 1 time of whether the condition is true or false.
    a++;
} while (a < 10);
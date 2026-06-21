let a = [1, 2, 3, 3]; // Single dimension array stored in a continuous memory

let grid = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

// Index of 1 -> 0,0

// Print all the elements
for (let i = 0; i < 3; i++) { //  i = 0,1,2
    for (let j = 0; j < 3; j++) {
        console.log(grid[i][j]);
    }
    console.log("\n");
}

/* Here we need to use 2 for loops. First for llop is for row and 2nd for
loop is for column
i = 0 means index of row starts from O.
i < 3 means total 3 rows present. So, i value will go from 0,1,2
j = 0 means index of column starts from O as well.
j < 3 means total 3 column present. So, j value will go from 0,1,2
console.log(rakesh_grid[i][j]); It means print the value of grid[i][j]

*/
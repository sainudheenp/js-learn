// 6. Write a program to check if the given matrix is an identity matrix?


function iDmatrix(mtrx) {
    console.log(mtrx)
    for (i = 0; i < mtrx.length; i++) {
        for (j = 0; j < mtrx[i].length; j++) {
            console.log(mtrx[i][j]);
            // if((j==i)==true)
        }
    }
}

let mtrx = [
    [1, 0, 0],
    [0, 1, 0],
    [0, 0, 1],

]

iDmatrix(mtrx)
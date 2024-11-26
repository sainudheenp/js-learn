// 6. Write a program to check if the given matrix is an identity matrix?
function iDmatrix(mtrx) {
    for (i = 0; i < mtrx.length; i++) {
        for (j = 0; j < mtrx[i].length; j++) {
            // console.log(i, j, mtrx[i][j]);
            if (typeof mtrx[i][j] !== "number" || typeof mtrx[i][j] !== "number") return null

            if (j !== i) {
                if (mtrx[i][j] != 0) {
                    return false
                }
            }
            if (i == j) {
                if (mtrx[i][j] !== 1) {
                    return false
                }
            }
        }
    }
    return true
}
let mtrx = [
    [1, 0, 0],
    [0, 1, 0],
    [0, 0, 1],

]

// console.log(iDmatrix(mtrx))


function test() {
    let inputs = [[
        [1, false, 0],
        [0, 1, 0],
        [0, 0, 1],

    ], [
        [1, 0, 0],
        [0, 1, 0],
        [1, 0, 1],

    ], [
        [1, 0, 0],
        [0, 2, 0],
        [0, 0, 1],

    ]]
    let outputs = [true, false, false]

    inputs.forEach((input, i) => {
        if (iDmatrix(input) == outputs[i]) {
            console.log("Test Passed")
        }
        else if (iDmatrix(input) === null) {
            console.log("Test Skipped")
        }

        else {
            console.log("Test Failed")
        }
    })


}


test()
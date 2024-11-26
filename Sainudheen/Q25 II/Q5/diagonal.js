function isDiagonal(mtrx) {
    for (i = 0; i < mtrx.length; i++) {
        for (j = 0; j < mtrx[i].length; j++) {
            if (typeof mtrx[i][j] !== "number" || typeof mtrx[i][j] !== "number") return null

            if (i !== j) {
                // console.log(i, j)
                if (mtrx[i][j] == 0) {
                    // console.log("item Equal to zero")
                }
                else {
                    return false
                }
            }
        }
    }
    return true
}



let array = [
    [1, 0, 0],
    [0, 2, 0],
    [0, 0, 3]
]

isDiagonal(array)

// console.log(isDiagonal(array))


function test() {
    let inputs = [[
        [1, false, 0],
        [0, 2, 0],
        [0, 0, 3]
    ], [
        [1, 1, 0],
        [0, 2, 0],
        [0, 1, 3]
    ], [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 3]
    ]]


    let outputs = [true, false, true];


    outputs.forEach((output, i) => {
        if (JSON.stringify(isDiagonal(inputs[i])) == JSON.stringify(output)) {
            console.log("Test Passed")
        }
        else if (isDiagonal(inputs[i]) === null) {
            console.log("Test Skipped")
        }

        else {
            console.log("test Failed")
        }
    })

}
test()

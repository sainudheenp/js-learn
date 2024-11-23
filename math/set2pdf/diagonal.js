// function isDiagonal(array) {
//     for (i = 0; i < array.length; i++) {
//         for (j = 0; j < array[i].length; j++) {
//             if (i !== j && array[i][j] !== 0) {
//                 return false
//             }

//         }
//     }
//     return true
// }

// function isDiagonal(mtrx) {
//     mtrx.forEach((row, i) => {
//         row.forEach((item, j) => {
//             if (i !== j && mtrx[i][j] !== 0) {
//                 return false; // Not diagonal
//             }
//         });
//     });
//     return true
// }



// function isDiagonal(mtrx) {
//     mtrx.forEach((row, i) => {
//         row.forEach((item, j) => {
//             if (i !== j) {
//                 // 01,02,10,12
//                 console.log("not ")
//                 if (mtrx[i][j] !== 0) {
//                     console.log(item, mtrx[i][j])
//                     return false
//                 }
//             }
//         });
//     });
//     return true
// }




function isDiagonal(mtrx) {
    for (i = 0; i < mtrx.length; i++) {
        for (j = 0; j < mtrx[i].length; j++) {
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
        [1, 0, 0],
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
        else {
            console.log("test Failed")
        }
    })

}
test()

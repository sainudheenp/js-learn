function transpose(arr) {
    arr.forEach((iarray, i) => {
        iarray.forEach((item, j) => {
            transMatrix[j][i] = item
        })
    })
    return transMatrix
}
let matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
let transMatrix = [[], [], []];

let inputs = [[[1, 2, 3], [4, 5, 6], [7, 8, 9]], [[1, 2, 3], [4, 5, 6], [7, 8, 9]], [[1, 2, 3], [4, 5, 6], [7, 8, 9]]]
let outputs = [[[1, 4, 7], [2, 5, 8], [3, 6, 9]], [[1, 4, 7], [2, 5, 8], [3, 6, 9]], [[1, 4, 7], [2, 5, 8], [3, 6, 9]]]


let test = (inputs, outputs) => {
    inputs.forEach((arr, i) => {
        // console.log(arr)
        // console.log("ret", transpose(arr))
        // console.log("exp", outputs[i])

        if (JSON.stringify(transpose(arr)) == JSON.stringify(outputs[i])) {
            console.log("Test Passed") ;
            // console.log(JSON.stringify(transpose(arr)))
        }
        else {
            console.log("Test Failed")
        }
    })
    
}


test(inputs, outputs)






// transpose(matrix);
// console.log(...matrix)
// console.log(...transMatrix)



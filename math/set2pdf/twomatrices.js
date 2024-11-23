let nofc = 3;
let nor = 3;
let addedArray = [[], [], []];

function twom(arr1, arr2) {
    for (i = 0; i < nor; i++) {
        addedArray[i] = []
        for (j = 0; j < nofc; j++) {
            addedArray[i][j] = arr1[i][j] + arr2[i][j];
        }
    }
    return addedArray 
}


// let array1 = [[1, 2, 3], [13, 3, 4], [4, 2, 5]]

// let array2 = [[44, 5, 6], [1, 3, 4], [77, 2, 6]]

// console.log(twom(array1, array2))


let input1 = [[[1, 2, 3], [13, 3, 4], [4, 2, 5]], [[1, 2, 3], [13, 3, 4], [4, 2, 5]], [[1, 2, 3], [13, 3, 4], [4, 2, 5]]]
let input2 = [[[44, 5, 6], [1, 3, 4], [77, 2, 6]], [[41, 5, 6], [1, 3, 4], [77, 2, 6]], [[44, 5, 6], [1, 3, 4], [77, 2, 6]]]

let output = [[[45, 7, 9], [14, 6, 8], [81, 4, 11]], [[42, 7, 9], [14, 6, 8], [81, 4, 11]], [[45, 7, 9], [14, 6, 8], [81, 4, 11]]]


function test(input1, input2, output) {
    output.forEach((outer, i) => {
        let retarray = twom(input1[i], input2[i])

        console.log("expected", JSON.stringify(outer))
        console.log("retarray", JSON.stringify(retarray));

        if (JSON.stringify(retarray) == JSON.stringify(outer)) {
            console.log("Tested Passed")
        } else {
            console.log("Test Failed")
        }

    })
}

test(input1, input2, output)







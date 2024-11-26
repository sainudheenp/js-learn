let nofc = 3;
let nor = 3;
let addedArray = [];

function twom(arr1, arr2) {
    for (i = 0; i < nor; i++) {
        addedArray[i] = []
        for (j = 0; j < nofc; j++) {
            addedArray[i][j] = arr1[i][j] + arr2[i][j];
        }
    }

    console.log("Array one")
    arr1.forEach(row => {
        console.log("[", ...row, "]")
    })

    console.log('\n Array two')
    arr2.forEach((row) => {
        console.log("[", ...row, "]")
    })

    console.log("\n Added Array:")
    addedArray.forEach(row => {
        console.log("[", ...row, "]")
    })




}


let array1 = [[1, 2, 3], [13, 3, 4], [4, 2, 5]]

let array2 = [[44, 5, 6], [1, 3, 4], [77, 2, 6]]



twom(array1, array2)









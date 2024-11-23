let array =
    [[1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]]

let trans = [[], [], []]

function transpose(arr) {

    for (i = 0; i < arr.length; i++) {
        // console.log(arr[i])
        for (j = 0; j < arr[i].length; j++) {
            // console.log(arr[i][j])
            trans[j][i] = arr[i][j];
            // console.log(trans[j][i]);
        }
    }
}

transpose(array)

console.log(...array)
console.log(...trans)


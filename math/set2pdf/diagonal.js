function isDiagonal(array) {
    for (i = 0; i < array.length; i++) {
        for (j = 0; j < array[i].length; j++) {
            if (array[i][j] == 0){
                console.log("Diagonal")
            }
        }
    }

}




let array = [
    [1, 0, 0],
    [0, 2, 0],
    [0, 0, 3]
]


isDiagonal(array)  
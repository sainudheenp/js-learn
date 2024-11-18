let array1 =
    [[1, 2, 3],
    [13, 3, 4],
    [4, 2, 5]]

let array2 =
    [[44, 5, 6],
    [1, 3, 4],
    [77, 2, 6]]

let nofc = 3;
let nor = 3;

let addedArray = [];

// .l.f
// .l.l.l.l
// .l/l.l
// .l/.l.

// i'k'j'jj;j.j.j'.jklj;kj;j;j;j;k;k;jk;j/.llklhlhlhlhlhjl.k.k.........l.j.kj.j.j.j.j.j.j.j.j.j.j.k...array1.at.apply.j..j.k.k.jk..jk..j.j.j.jk.j.j.kjk..j.
// .k.khkggkggkghgkg.g.g.k.g.k.k.kg.k.k.j.g...kj.jk.kj.jk..kjj.j.jk.j.

function twom(arr1, arr2) {
    for (i = 0; i < nor; i++) {
        addedArray[i] = []
        for (j = 0; j < nofc; j++) {
            // console.log('hi')
            console.log("sum", arr1[i][j] + arr2[i][j])
            addedArray[i][j] = arr1[i][j] + arr2[i][j];


        }
    }

    console.log('\n')

    // for (let i = 0; i < nor; i++) {
    //     console.log(addedArray[i])
    // }

    // for (let i = 0; i < nor; i++) {
    //     console.log('\n')
    //     for (j = 0; j < nofc; j++) {
    //         console.log(addedArray[i][j])
    //     }
    // }



    addedArray.forEach(row => {
        console.log("[",...row ,"]")
    })
}

twom(array1, array2)



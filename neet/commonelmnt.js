// 28. Write a program to find the common elements in two arrays.

function find() {
    let arr1 = [2,3,2]
    let arr2 = [1,2]

    // console.log(arr1)

    // arr1.filter((items, i) => {
    //     console.log(items)
    //     items.Includes(1)
    // })
    let commonarray = []
    arr1.forEach((item1, i) => {
        arr2.forEach((item2) => {

            if (item1 == item2 && !(commonarray.includes(item1))) {
                commonarray.push(item2)
            }
        })
    })
    return commonarray

}


console.log(find())
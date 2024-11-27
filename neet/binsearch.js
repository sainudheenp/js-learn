// // binary search algorithm is a searching algorithm used in sorted array 

// v2
let array = [1, 4, 2, 5, 6, 7, 3, 9]
function binSearch(arr, item) {
    sortedarray = arr.sort((a, b) => a - b)

    let start = 0;
    let end = sortedarray.length - 1
 
    while (end  >= start) {
        const middleIDX = Math.floor((start + end) / 2)

        if (sortedarray[middleIDX] == item) {
            return console.log("Item Found at ", middleIDX)
        } else if (sortedarray[middleIDX] > item) {
            end = middleIDX - 1
        }
        else {
            start = middleIDX + 1
        }
    }
    return console.log("Not Found")
}
binSearch(array, 3)






























// v1
// let array = [1, 4, 2, 5, 6, 7, 3, 9]

// function binSearch(array, search) {
//     sortedArray = array.sort((a, b) => a - b)
//     console.log(sortedArray)
//     let left = 0;
//     let right = sortedArray.length - 1

//     while (left <= right) {

//         let middleidx = Math.floor((left + right) / 2)

//         console.log("middle item",sortedArray[middleidx])
//         console.log("indx",middleidx)
//         if (sortedArray[middleidx] === search) {
//             return console.log("Elelment Found at index", middleidx)
//         } else if (sortedArray[middleidx] > search) {

//             right = middleidx - 1 ;
//         }
//         else {
//             left = middleidx + 1
//         }
//     }
//     return console.log("Elemetn not found")

// }
// binSearch(array, 7)

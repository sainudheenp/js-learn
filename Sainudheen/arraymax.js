// find max value in array v1 works

// function maxVal(arr){
//     console.log(arr.sort((a,b)=>a-b)[arr.length-1])

// }



// v2 works
// function maxVal(arr) {
//     let max = 0;
//     for (i = 1; i <= arr.length; i++) {
//         if (arr[i] > max) {
//             max = arr[i]
//         }
//         else {
//             max = max
//         }
//     }
//     console.log(max)
// }
// maxVal([2, 4, 12, 3, 5, 1, 9])


function maxVal(arr) {
    let max = 0;
    for (i = 1; i <= arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i]
        }
        else {
            max = max
        }
    }
    return max;
}

function test(input, exsum) {
    input.forEach((inp, idx) => {
      return  maxVal(inp) == exsum[idx] ? console.log("Test Passed") : console.log("Test Failed")
    });

}
let input = [[1, 2, 3, 4],[2, 4, 5, 6],[6, 5, 7, 8]]
let exsum = [4, 6, 8]
test(input, exsum)
// find max value in array

// function maxVal(arr){
//     console.log(arr.sort()[arr.length-1])

// }

function maxVal(arr) {
    let max = 0;
    for (i = 1; i <= arr.length; i++) {
        if ( arr[i] > max) {
            max = arr[i]
        }
        else{
            max=max
        }
    }
    console.log(max)
}


maxVal([2, 4, 1,3,5,1,9])
// 22
let arr = [3, 4, 5, 5, 6, 7, 3, 4, 4]


function arraydup(arr) {
    arr.forEach((element, i) => {
        for (let j = 1; j < arr.length; j++) {
            // console.log("element",element,"second:",arr[j])
            if (element == arr[j + i]) {
                // console.log("dup Found");
                arr.splice(j + i, 1)
            }
        }

    });
    // console.log(...arr)
    return arr
}

arraydup(arr)
.
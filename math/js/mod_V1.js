
function findMod(arr) {
    // let itemcount = 0
    arr.forEach((item) => {
        // console.log(item);

        for (i = 0; i < arr.length; i++) {
            let count = 1;

            if (item == arr[i]) {
                console.log("equal")
                count++;
                console.log(count);



            }
            else {
                // console.log("Not equal")
            }
        }

    })
}


findMod([1, , 1, 1, 2, 4, 4, 5])
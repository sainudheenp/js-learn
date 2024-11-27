// most repeated value in an array of numbers?
function mostrep(arr) {
    let obj ={}
    arr = arr.sort((a, b) => a - b)
    let maxvalue = 0;
    arr.forEach((item, i) => {
        let count = 0;
        arr.forEach((anitem, j) => {
            if (item == anitem) {

                // count = count + 1;
                maxvalue = anitem;
                obj[item] = (obj[item] +1 ||0 )
                console.log(obj)
            }
            else {
                count = count;
            }

        })
        // console.log(count)
    })
    console.log(obj)
    console.log("maxvalue", maxvalue)

}

let array = [1, 4, 1, 1, 3, 1, 4, 4, 1]

mostrep(array)

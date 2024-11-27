// input  [1,2,3,3,4,4] ,change (3to9)

function numchange(n, r) {

    let arr = [11, 22, 3, 3, 4, 4]
    arr.forEach((item, i) => {
        if (item == n) {
            arr[i] = r
        }
    })
    return arr

}

console.log(numchange(11, 4))
// diff b/w highest and lowest


function range(arr) {
    return Math.max(...arr) - Math.min(...arr)
}

let arr = [3, 8, 9];
console.log(range(arr));


function test() {
    const inop = [
        { inp: [3, 8, 9], exp: 6 },
        { inp: [3, 3, 9], exp: 6 },
        { inp: [1, 8, 10], exp: 9 },
        { inp: [30, 8, 9], exp: 22 },
        { inp: [3, 8, 90], exp: 87 },
    ];

    inop.forEach((obj, i) => {
        if (range(obj.inp) == obj.exp) {
            console.log("Test Passed")
        }
        else {
            console.log("Test Failed")
        }
    })

}

test()
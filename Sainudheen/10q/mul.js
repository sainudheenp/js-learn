// 6. Calculate the multiplication table of a given number.



function mul(n) {
    if (typeof n !== "number") return null
    let mularray;
    mularray = [];
    for (let i = 1; i <= 10; i++) {
        mularray.push(i * n);
        // console.log(`${i} * ${n} =${i * n}`)

    }
    return mularray;
}

// console.log(mul(10))

function test(input, output) {
    console.clear();

    input.forEach((inp, i) => {
        if (JSON.stringify(mul(inp)) == JSON.stringify(output[i])) {
            console.log("Test Passed")
        } else if (mul(inp) == null) {
            console.log("Skipped : Invalid Input")
        }
        else {
            console.log("Test Failed")
        }
    });
}

let input = [2, "j", 5];
let output = [
    [2, 4, 6, 8, 10, 12, 14, 16, 18, 20],
    [4, 8, 12, 16, 20, 24, 28, 32, 36, 40],
    [5, 10, 15, 20, 25, 30, 35, 40, 45, 50],
];

test(input, output);

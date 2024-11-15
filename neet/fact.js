// factorial


function fact(n) {
    let f = 1;
    for (let i = 1; i <= n; i++) {
        f = f * i;
    }
    // console.log(f)
    return f
}
// fact(10)

// fac 5 = 1*2*3*4*5


// inputs
let inputs = [5,6, 7, 8, 9,]
let output = [120,720, 5040, 40320, 362880]


const testy = (inputs, output) => {
    inputs.forEach((input, index) => {
        fact(input) == output[index] ? console.log("Test Passed") : console.log("Test Failed")
    });
}

testy(inputs,output)


let areaRect = (l, b) => l * b


let inputs = [[2, 3], [5, 7], [6, 8]];
let outputs = [6, 35, 48]

function test(inputs, outputs) {
    inputs.forEach(([a, b], i) => {
        // console.log(areaRect(a, b))
        if (areaRect(a, b) == outputs[i]) {
            console.log("Test Passed")
        } else {
            console.log("Test Failed")
        }
    })
}
test(inputs, outputs)

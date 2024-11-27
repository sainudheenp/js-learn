let area = (b, h) => (b * h) / 2

let test = () => {
    let inputs = [["lk", 15], [20, 30], [30, 40]]
    let outputs = [75, 300, 600]

    inputs.forEach(([a, b], i) => {
        if (typeof a !== "number" || typeof b !== "number") return console.log("Invalid input")
        // console.log(i, area(a, b))
        if (area(a, b) == outputs[i]) {
            console.log("Test Passed")
        } else {
            console.log("Test Failed")
        }
    })
}
test()
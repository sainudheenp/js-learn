// function rem(a, b) {
//     let rem = 0;
//     rem = a % b;
//     return rem;
// }


// oneline function
const rem = (a, b) => a % b;
// function rem(a,b){return a%b}

let input = [[1, 2], [13, "l"], [20, 50]]
let wxop = [1, 3, 20]
function test() {

    input.forEach(([a, b], i) => {
        retvalue = rem(a, b)
        if (typeof a !== "number" || typeof b !== "number") return console.log("Test Skipped")

        if (retvalue == wxop[i]) {
            console.log(i, "Test Passed")
        }
        else if (retvalue == null) {
            console.log("Test Skipped")
        }
        else {
            console.log("Test Failed")
        }
    })
}
test()
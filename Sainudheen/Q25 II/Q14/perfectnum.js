// 14


function Isperfect(number) {
    if (typeof number !== "number") return null

    let array = [];
    let sum = 0;

    for (i = 1; i < number; i++) {
        if (number % i == 0) {
            array.push(i);
            sum = sum + i
        }
    }
    if (number == sum) {
        // console.log("Perfect Number")
    } else {
        // console.log("! Perfect Number")
    }
    return sum

}

// console.log(Isperfect(6))


let input = [5, 6, 8, 28]
let output = [1, 6, 7, 28]

function test() {
    input.forEach((input, i) => {
        console.log("exop", output[i])
        console.log("ret", Isperfect(input))
        if (Isperfect(input) == output[i]) {
            console.log("Test Passed")
        }
        else if (Isperfect(input) == null) {
            console.log("Test Skipped")
        }
        else {
            console.log("Test Failed")
        }
    })
}


test()



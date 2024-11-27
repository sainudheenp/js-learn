function gcd(a, b) {
    if (typeof a !== "number" || typeof b !== "number") return null
    if (b === 0) {
        return a;
    }
    return gcd(b, a % b)
}
console.log(gcd(60, 21))



function test() {
    let inputs = [[56, 98], [22, 99], [77, 99]];
    let outputs = [14, 11, 11]

    inputs.forEach(([a, b], i) => {
        if (gcd(a, b) == outputs[i]) {
            console.log("Test Passed")
        } else if (gcd(a, b) == null) {
            console.log("Test Skipped")
        }
        else { console.log("Test Failed") }
    })
}
test()

// let gcd = (a, b) => {
//     // if (b === 0) return a;
//     // else {
//     //     return gcd(b, a % b)
//     // }
// }


// die
// recursion 


let deccounter = (num) => {
    if (num == 0) return;
    console.log(num)
    // console.log(num+ deccounter(num-1))
    // console.log(num-deccounter(oooffffffffff))
    deccounter(num - 1)
}
deccounter(20);

let R = (a) => {
    // for (i = a; i >= 0; i--) {
    //     console.log(i)
    // }

    // using  rec
    console.log("a:", a)
    a = a - 1
    if (a < 0) return;
    else R(a)

}
R(4)

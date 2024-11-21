function pal(strs) {
    strs = String(strs)
    let rmspace = strs.replace(/ /g, "");
    let revstr = rmspace.split("").toReversed().join('');

    if (revstr == rmspace) {
        // console.log("Palindrome")
        return true
    }
    else {
        // console.log("! Palindrome")
        return false
    }


}
// pal("phey y ehp")
// pal(121211)
// pal("hey zain niaz yeh")


function test() {
    let inputs = ["h ey ", "e y e", "pp oo pp", "we are "]
    let outputs = [false, true, true, false]
    inputs.forEach((item, i) => {
        if (pal(item) == outputs[i]) {
            console.log("Test Passed")
        }
        else {
            console.log("Test Failed")
        }
    })
}

test()
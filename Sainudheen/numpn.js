// 1. Check the given number is positive, negative or zero.
function CheckNum(num) {
    if (num > 0) {
        return "Positive"
    }
    else if (num < 0) {
        return "Negative"
    }
    else {
        return ("Zero")
    }
}

console.log(
    CheckNum(2))

const test = () => {
    let values = [1, -2, 0, 2,];
    let res = ["Positive", "Negative", "Zero", "Positive",];
    for (i = 0; i < values.length; i++) {
        let retValue = CheckNum(values[i])
        if (retValue == res[i]) {
            console.log(retValue, ": Test Passed ")
        }
        else {
            console.log(retValue, ": Test Failed")
        }
    }
}
// test()
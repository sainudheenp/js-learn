// d/dx  x^n =nx^(n-1)

function der(n) {
    return `${n}x^${n - 1}`
}
console.log(der(5))



let test = () => {
    let inputs = [5, 6, 7, 9];
    let outputs = ["5x^4", "6x^5", "7x^6", "9x^8"]

    inputs.forEach((input, i) => {
        if(der(input)==outputs[i])
            {
            console.log("Test Passed")
        }
        else{
            console.log("Test Failed")
        }
    });

}

test()
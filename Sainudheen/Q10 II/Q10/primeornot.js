

function isPrime(num) {

    if (num < 2) return "Not prime";
    if (num === 2) return "Prime";
    if (num % 2 === 0) return "Not prime";
    for (let i = 3; i <= Math.sqrt(num); i += 2) {
        if (num % i === 0) {
            return "Not prime";
        }
    }
    return "Prime";
}




let test = () => {
    const testCases = [
        { input: 1, expected: "Not prime" },
        { input: 2, expected: "Prime" },
        { input: 3, expected: "Prime" },
        { input: 4, expected: "Not prime" },
        { input: 5, expected: "Prime" },
        { input: 16, expected: "Not prime" },
        { input: 17, expected: "Prime" },
        { input: 18, expected: "Not prime" },
        { input: 19, expected: "Prime" },
        { input: 25, expected: "Not prime" },
        { input: false, expected: "Prime" },
    ];

    testCases.forEach((obj, i) => {
        // console.log(obj.input)
        if (isPrime(obj.input) == obj.expected) {
            console.log("Test Passed")
        } else if (isPrime(obj.input) == null) {
            console.log("SKipped")
        }
        else {
            console.log("Test Failed")
        }
    })
}



// isPrime(3)
// isPrime(10)
// isPrime(17)
// isPrime(11587)
test()

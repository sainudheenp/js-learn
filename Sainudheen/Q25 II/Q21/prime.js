function isPrime(num) {
    if (typeof num !== "number") return null
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}
// 
//   
function upto(n) {
    let primarr = [];
    for (let j = 2; j <= n; j++) {
        if (isPrime(j)) {
            primarr.push(j);
        }
    }
    return primarr;
}

// Tes
function testt() {
    let inputs = [3, 9, 16];
    let outputs = [[2, 3], [2, 3, 5, 7], [2, 3, 5, 7, 11, 13]];

    inputs.forEach((lmt, i) => {
        const result = upto(lmt);
        const expected = outputs[i];


        if (JSON.stringify(result) === JSON.stringify(expected)) {
            console.log("Test Passed");
        }
        else if (JSON.stringify(result) === null) {
            console.log("Test skipped");
        }

        else {
            console.log("Test Failed");
        }
    });
}

testt();


function isPrime(num) {
    if (num == 3 || num == 2) {
        return "Prime"
    }
    else {
        if (num % 2 == 0 || num % 3 == 0) {
            return "Not Prime"
        }
        else {
            return "Prime"
        }
    }
}




function test(testvals, resvals) {
    testvals.forEach((value, idx) => {
        isPrime(value) == resvals[idx] ? console.log(`Test Case ${idx + 1} Passed`) : console.log(`Test Case ${idx + 1}Failed`)
    });

}

// input 
let testvals = [3, 4, 5, 6, 7, 8]
let resvals = ["Prime", "Not Prime", "Prime", "Not Prime", "Prime", "Not Prime"]

test(testvals, resvals)
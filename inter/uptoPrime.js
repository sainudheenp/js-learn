function isPrime(num) {
    if (num <= 1) {
        return false
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i == 0) {
            return false
        }
    }
    return true
}

// console.log(isPrime(9))

function upTo(lmt) {
    let uparray = []
    for (j = 0; j < lmt; j++) {
        if (isPrime(j)) {
            uparray.push(j)
        }
    }
    console.log(...uparray)
}

upTo(100)
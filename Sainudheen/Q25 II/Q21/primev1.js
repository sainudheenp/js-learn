

function IsPrime(num) {
    console.log("hello")
    if (num < 2) { return false }
    if (num == 2 || num == 3) { return true }
    if (num > 3) {
        for (i = 3; i < num; i++) {
            if (num % i == 0) {
                return false;
            }
        }
        return true
    }

}

console.log(IsPrime(4))


function isPrime(n) {
    if (n % n != 0 && n % 1 == 0) {

        console.log(" not prime")

    }
    else{
        console.log("prime")
    }
}



// prime numbers   
3, 4, 5, 6, 7, 8, 9, 10
3, 5, 7, 11, 13, 17, 19, 23, 29



// v2
function isPrime(n) {

    for (i = 2; i < n; i++) {
        if (true) {
            if (n % i != 0 ) {
                console.log("i :", i)
                console.log(n % i)
                console.log("not prime")
                break;
                // continue ;
            }
            else {
                // console.log(" prime")

            }
        } else {
            console.log(" prime")

        }


    }

}

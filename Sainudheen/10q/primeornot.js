// v1
// function isPrime(n) {
//     if (n % n == 0 && n % 1 == 0 ) {
//         for (i = 1; i <= n; i++) {
//             if(i%n==0){
//                 console.log(" not prime")
//             }
//             else{
//                 if(n%n==0&&n % 1 == 0  && n/n-1){
//                 console.log(" prime")
//                 }

//             }
//         }
//     }
//     else {

//     }
// }






// function isPrime(n) {
//     if (n % n != 0 && n % 1 == 0) {

//         console.log(" not prime")

//     }
//     else{
//         console.log("prime")
//     }
// }



// prime numbers   
3, 4, 5, 6, 7, 8, 9, 10
3, 5, 7, 11, 13, 17, 19, 23, 29



// v2
// function isPrime(n) {

//     for (i = 2; i < n; i++) {
//         if (true) {
//             if (n % i != 0 ) {
//                 console.log("i :", i)
//                 console.log(n % i)
//                 console.log("not prime")
//                 break;
//                 // continue ;
//             }
//             else {
//                 // console.log(" prime")

//             }
//         } else {
//             console.log(" prime")

//         }


//     }

// }




// v3

// function isPrime(n){
//     for(i=2;i<n;i++){
//         if(n%i==0){
//           return  console.log("not prime")
//             // break;
//         }

//     }
//     return console.log("prime")
// }



// v4
// function isPrime(n) {


//     if (n == 2 || n == 3) {
//         console.log(`${n} Is a Prime Number`)

//     } else {

//         if (n % 2 == 0 || n % 3 == 0) {
//             return console.log(`${n} Not a Prime Number`)
//         } else {
//             return console.log(`${n} Is a Prime Number`)

//         }
//     }


// }
// let myfun = ()=>{

// }


// v5


function isPrime(num) {
    hfghhgfgfgf
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
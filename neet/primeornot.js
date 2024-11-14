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
function isPrime(n) {


    if (n == 2 || n == 3) {
        console.log(`${n} Is a Prime Number`)

    } else {

        if (n % 2 == 0 || n % 3 == 0) {
            return console.log(`${n} Not a Prime Number`)
        } else {
            return console.log(`${n} Is a Prime Number`)

        }
    }


}
let myfun = ()=>{
    
}


isPrime(3)
isPrime(10)
isPrime(17)
isPrime(11587)
isPrime(2136279841)
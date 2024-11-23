
/* 
Prime Number
2,3,5,7,11,13,17
2,3 prime


*/

// function IsPrime(num) {
//     console.log("hello")
//     if (num < 2) { return false }
//     if (num == 2 || num == 3) { return true }
//     if (num > 3) {
//         for (i = 3; i < num; i++) {
//             if (num % i == 0) {
//                 return false;
//             }
//         }
//         return true
//     }

// }

// console.log(IsPrime())



function ISPrime(n) {
    console.log(n)
    if (n < 2) return false;
    for (var i = 2; i <= Math.sqrt(n); i++) {
        if (n % i == 0) {
            return false;
        }
    }
    return true
}
function upto(n) {
    let primarr = []
    for (j = 0; j <= n; j++) {
        console.log()
        if (ISPrime(j)) primarr.push(j)
    }
    console.log(...primarr)
}
console.log(upto(16));




function testt(){
ISPrime
}






















// psudo
// prime number or not 
// if(num<2)ret false
// for(i=2;i<=Math.sqrt(num);i++){
//     if(num%i==0) return false  , no else part
// return true 
// }


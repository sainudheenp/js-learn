
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

// console.log(IsPrime(4))



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

console.log(IsPrime(4))



// function upto(n) {
//     let primarr = []
//     for (j = 0; j <= n; j++) {
//         console.log()
//         if (ISPrime(j)) primarr.push(j)
//     }
//     console.log(...primarr)
//     return primarr
// }
// console.log(upto(16));




// function testt() {
//     let inputs = [3, 9, 16];
//     let outputs = [[2, 3], [2, 3, 5, 7], [2, 3, 5, 7, 11, 13]]

//     inputs.forEach((lmt, i) => {
//         console.log("exop", JSON.stringify(upto(lmt)), JSON.stringify(outputs[i]))
//         if (JSON.stringify(upto(lmt)) == JSON.stringify(outputs[i])) {
//             console.log("test Passed")
//         } else {
//             console.log("Test Failed")
//         }
//     })
// }

// testt()




















// psudo
// prime number or not 
// if(num<2)ret false
// for(i=2;i<=Math.sqrt(num);i++){
//     if(num%i==0) return false  , no else part
// return true 
// }


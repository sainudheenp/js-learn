


function isPrime(num) {
    if (num < 2) return false;
    if (num === 2) return true;
    if (num % 2 === 0) return false;
  
    for (let i = 3; i <= Math.sqrt(num); i += 2) {
      if (num % i === 0) return false;
    }
    return true;
  }




console.log(isPrime(10))

 

// function _() {

//     let primearry = []
//     for (j = 2; j <= 100; j++) {
//         if (IsPrime(j) == true) {
//             primearry.push(j)
//         }

//     }
//     console.log(...primearry)
// }
// _()
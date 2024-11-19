// // factorial of a number using recursive methode
// function fact(num) {
//   let fact = 1;
//   for (i = 1; i <= num; i++) {
//     fact =fact * i
//   }
//   console.log(fact)
// }
// fact(5);

// factorial of a number using recursive methode

function fact(num) {
  if (num == 0) {
    return 1;
  } else {
    return num * fact(num - 1);
  }
}

console.log(fact(10));

//num * fact(num-1) 5* fact4)      5*24       120
//                  4* fact(3)   (4*6)        24
//                  3* fact(2)   (3*2)  return 6
//                  2* fact(1)   (2*1) return 2
//                  1* fact(0)  (1*1) return 1
//                   retrun 1

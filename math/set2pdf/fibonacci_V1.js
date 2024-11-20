console.clear();
// fibonacci  0f first 8 digit
// 0,1,1,2,3,5,8,13
function fib(limit) {
  let fib = 0;
  let fibArray = [];
  for (i = 1; i < limit; i++) {
    fib = fib + i;
    console.log(fib);
    fibArray[i] = fib;
// why dilgas
  }
  console.log(...fibArray);
}
fib(8);

// 0,1,  1,2,3,5,8,13
console.clear();
function fib(num) {
  fibArray = [];

  let fib1 = 0;
  let fib2 = 1;
  let next = 0;
  for (i = 2; i < num; i++) {
    next = fib1 + fib2;
    fib1 = fib2;
    fib2 = next;
    console.log(next);
  }
}

fib(5);
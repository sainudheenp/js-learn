// 0,1,  1,2,3,5,8,13

// fib1 =0
// fib2=1
// fib3=1
// fib4=2
// fib5=3
// fib6=5
// fib7=8
// fib8=13
// fib9=21
// fib10=34

console.clear();
// function fib(num) {
//   fibArray = [0,1];
//   let fib1 = 0;
//   let fib2 = 1;
//   let next = 0;
//   for (i = 2; i < num; i++) {
//     next = fib1 + fib2;
//     fib1 = fib2;
//     fib2 = next;
//     console.log(next);
//   }
// }

function fib(lm) {
  if(typeof lm !=="number") return null
  let fibArray = [0, 1];
  let fibn = 0;
  for (i = 2; i < lm; i++) {
    fibn = fibArray[fibArray.length - 1] + fibArray[fibArray.length - 2]
    fibArray.push(fibn)

  }
  // console.log(...fibArray)
  return fibArray;
}

fib(4)

let input = ["f", 5, 6]
let output = [[0, 1, 1, 2], [0, 1, 1, 2, 3], [0, 1, 1, 2, 3, 5]]

function test() {
  input.forEach((inp, i) => {
    // console.log("fib", fib(inp))
    // console.log("out", output[i])
    if (JSON.stringify(fib(inp)) == JSON.stringify(output[i])) {
      console.log("Test Passed")
    }else if(fib(inp)==null){return console.log("Test Skipped")}
    else {
      console.log("Test Failed")
    }
  })
}

test()

// 6. Calculate the multiplication table of a given number.



function mul(n) {
  let mularray;
  mularray = [];
  for (let i = 1; i <= 10; i++) {
    mularray.push(i * n);
  console.log(`${i} * ${n} =${ i*n}`)

  }
  return mularray;
}

console.log(mul(10))


function test(input, output) {
  console.clear();

  for (i = 0; i < input.length; i++) {
    // input array values
    // console.log("input array ;", input[i]);
    // console.log(i, "Output NestedArray ;", output[i]);


    // check using the array
    // console.log(mul(input[i]),output[i])
    // mul(input[i])==output[i] ? console.log("Array Test Passed"):console.log("Array Test Failed")


    
    for (let k = 0; k < output[i].length; k++) {
    //   console.log(k, "arrValue :", output[i][k],"Func ret:",mul(input[i])[k]);
      if (mul(input[i])[k] == output[i][k]) {
        console.log(i,k+1,"Test Passed");
      }
      else{
        console.log(i,k+1,"Test failed")
      }
    }
  }
}

// .kli.clearpop.l].
// input3;op
let input = [2, 4, 5];
let output = [
  [2, 4, 6, 8, 10, 12, 14, 16, 18, 20],
  [4, 8, 12, 16, 20, 24, 28, 32, 36, 40],
  [5, 10, 15, 20, 25, 30, 35, 40, 45, 50],
];

// test(input, output);

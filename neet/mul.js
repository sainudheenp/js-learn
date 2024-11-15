function mul(n) {
  let mularray;
  mularray = [];
  for (let i = 1; i <= 10; i++) {
    mularray.push(i * n);
  }
  return mularray;
}

function test(input, output) {
  console.clear();

  for (i = 0; i < input.length; i++) {
    // input array values
    console.log("input array ;", input[i]);
    // console.log(i, "Output NestedArray ;", output[i]);
    for (let k = 0; k < output[i].length; k++) {
      console.log(k, "arrValue :", output[i][k],"Func ret:",mul(input[i])[k]);
      if (mul(input[i])[k] == output[i][k]) {
        console.log("Test Passed");
      }
      else{
        console.log("Test failed")
      }
    }
  }
}

// input3;op
let input = [2, 4, 5];
let output = [
  [2, 4, 6, 8, 10, 12, 14, 16, 18, 20],
  [4, 8, 12, 16, 20, 24, 28, 32, 36, 40],
  [5, 10, 15, 20, 25, 30, 35, 40, 45, 50],
];

test(input, output);

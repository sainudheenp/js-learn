function mul(n) {
  let mularray;
  mularray = [];
  for (let i = 1; i <= 10; i++) {
    // console.log(`${i} * ${n} =${i * n}`)
    mularray.push(i * n);
  }
  return mularray;
}
//console.log(mul(2))
function test(input, output) {
  input.forEach((number) => { 
    output.forEach((exoparray) => {
      console.log("passing input ", number);

      let mularray = [];
      mularray = mul(number);

      console.log("full array", ...mularray);

      exoparray.forEach((exval, i) => {
        console.log("exva", exval, "mulval", mularray[i]);
        if (exval == mularray[i]) {
          console.log("workd");
        } else {
          console.log(":tada:wth", mularray[i], "exoparray", exval);
        }
      });
    });
  });
}
// input3;op
let input = [2, 4, 5];
let output = [
  [2, 4, 6, 8, 10, 12, 14, 16, 18, 20],
  [4, 8, 12, 16, 20, 24, 28, 32, 36, 40],
  [5, 10, 15, 20, 25, 30, 35, 40, 45, 50],
];
test(input, output);

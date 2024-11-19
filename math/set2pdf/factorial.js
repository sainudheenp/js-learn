// factorial of a number usign Recursive function
function fact(num) {
  if (num == 0) {
    return 1;
  } else {
    return num * fact(num - 1);
  }
}
// console.log(fact(5));

let inop = {
  test1: [5, 120],
  test2: [10, 102333],
  test3: [5, 120],
};

let test = () => {
  //   fact(inop[0][0]);

  for (let key in inop) {
    // console.log(key);
    // console.log(inop[key]);
    if (fact(inop[key][0]) == inop[key][1]) {
      console.log("Test passed");
    } else {
      console.log("Test Failed");
    }
  }
}; 
test();
